import { Autocomplete, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";


export default function PageNotFound() {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
            <Grid item xs={12}>
                <Grid container direction="column" alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Box
                            component="img"
                            sx={{
                                maxWidth: "xl",
                                margin: "auto"
                            }}
                            alt="The house from the offer."
                            src="./src/assets/404.jpg"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
