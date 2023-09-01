import FitbitIcon from "@mui/icons-material/Fitbit";
import { SvgIcon, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
function Logo() {
  const router = useRouter()
  return (
    <>
      <SvgIcon color="primary" onClick={() => router.push('/')}>
        <FitbitIcon />
      </SvgIcon>
      <Typography
        variant="h5"
        ml={"5px"}
        color="text.primary"
        onClick={() => router.push('/')}
      >
        Admin
      </Typography>
    </>
  );
}
export default Logo;
