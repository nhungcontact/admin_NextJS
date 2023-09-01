import { User, UserRole } from "@/types/user";
import { faker } from "@faker-js/faker";
import { ListOptions, ListResponse } from "@/types/shared";
import { extractQueryParams } from "@/utils/query";
import { FetchMockStatic } from "@gr2m/fetch-mock";

export default function mockUsers(fetchMock: FetchMockStatic) {
  let users = [] as User[];

  for (let index = 0; index < 46; index++) {
    users.push({
      _id: faker.database.mongodbObjectId(),
      displayName: faker.internet.displayName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      tel: faker.phone.number("84-###-###"),
      avatar: faker.internet.avatar(),
      role: faker.helpers.enumValue(UserRole),
    });
  }

  return fetchMock
    .get(
      "path:/api/users",
      (path) => {
        console.log("🚀 ~ Mock response to [GET]", path);

        const options = extractQueryParams(path) as ListOptions<User>;
        const { offset = 0, limit = 10, search } = options;

        const results = users.filter((item) =>
          item.displayName.toLocaleLowerCase().includes(search || ""),
        );

        return {
          items: results.slice(offset, offset + limit),
          total: results.length,
          options,
        } as ListResponse<User>;
      },
      { delay: 1000 },
    )
    .get(
      "express:/api/users/:id",
      (path) => {
        console.log("🚀 ~ Mock response to [GET]", path);

        const userId = path.substring(path.lastIndexOf("/") + 1);
        const user = users.find((u) => u._id == userId);

        if (!user) return 404;

        return user;
      },
      { delay: 1000 },
    )
    .post(
      "path:/api/users",
      (path, opt) => {
        if (!opt.body) {
          return 400;
        }

        console.log("🚀 ~ Mock response to [POST]", path);

        const jsonBody = JSON.parse(opt.body.toString());

        users.unshift({
          _id: faker.database.mongodbObjectId(),
          avatar: faker.internet.avatar(),
          ...jsonBody,
        });

        return users[0];
      },
      { delay: 1000 },
    )
    .put(
      "express:/api/users/:id",
      (path, opt) => {
        if (!opt.body) {
          return 400;
        }

        console.log("🚀 ~ Mock response to [PUT]", path);

        const userId = path.substring(path.lastIndexOf("/") + 1);
        const userIndex = users.findIndex((u) => u._id == userId);
        const jsonBody = JSON.parse(opt.body.toString());

        users[userIndex] = {
          ...users[userIndex],
          ...jsonBody,
        };

        return users[userIndex];
      },
      { delay: 1000 },
    )
    .delete(
      "express:/api/users/:id",
      (path) => {
        console.log("🚀 ~ Mock response to [DELETE]", path);

        const userId = path.substring(path.lastIndexOf("/") + 1);
        const userIndex = users.findIndex((u) => u._id == userId);
        const data = users[userIndex];

        users = [...users.slice(0, userIndex), ...users.slice(userIndex + 1)];

        return data;
      },
      { delay: 1000 },
    );
}
