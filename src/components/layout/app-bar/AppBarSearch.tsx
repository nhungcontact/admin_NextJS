import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function AppBarSearch() {
  return (
    <>
      <OutlinedInput
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "10px",
          },
          height: "45px",
          width: "300px",
          marginLeft: "20px",
        }}
        placeholder="Search...."
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </>
  );
}
export default AppBarSearch;
