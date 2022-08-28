import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import React from "react";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
	return (
		<AuthLayout title={"Login"}>
			<form>
				<Grid item xs={12} sx={{ mt: 2 }}>
					<TextField
						label="Correo"
						type="email"
						placeholder="correo@gamil.com"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sx={{ mt: 2 }}>
					<TextField
						label="Contraseña"
						type="password"
						placeholder="contraseña"
						fullWidth
					/>
				</Grid>
				<Grid container spacing={1} sx={{ mb: 2, mt: 1 }}>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<Button variant="contained" fullWidth>
							<Typography sx={{ ml: 1 }}>Login</Typography>
						</Button>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<Button variant="contained" fullWidth>
							<Google />
							<Typography sx={{ ml: 1 }}>Google</Typography>
						</Button>
					</Grid>
				</Grid>
				<Grid container direction="row" justifyContent="end">
					<Link component={RouterLink} color="inherit" to="/auth/register">
						Crear cuenta
					</Link>
				</Grid>
			</form>
		</AuthLayout>
	);
};
