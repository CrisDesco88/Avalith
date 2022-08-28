import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
		<AuthLayout title={"Registrarse"}>
			<form>
				<Grid item xs={12} sx={{ mt: 2 }}>
					<TextField
						label="Nombre Completo"
						type="text"
						placeholder="Nombre Completo"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sx={{ mt: 2 }}>
					<TextField
						label="Correo"
						type="email"
						placeholder="Correo"
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
							<Typography sx={{ ml: 1 }}>Crear cuenta</Typography>
						</Button>
					</Grid>
				</Grid>
				<Grid container direction="row" justifyContent="end">
					<Link component={RouterLink} color="inherit" to="/auth/login">
						Ya tengo una cuenta
					</Link>
				</Grid>
			</form>
		</AuthLayout>
	);
}
