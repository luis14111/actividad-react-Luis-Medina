// Página Usuarios - Consume la API de JSONPlaceholder y muestra los datos en una tabla MUI
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
        setCargando(false);
      });
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: "bold", mb: 3 }}>
        Lista de Usuarios
      </Typography>

      {cargando ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#1976d2" }}>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Nombre</TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Correo</TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Teléfono</TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Sitio web</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuarios.map((usuario) => (
                <TableRow
                  key={usuario.id}
                  hover
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{usuario.name}</TableCell>
                  <TableCell>{usuario.email}</TableCell>
                  <TableCell>{usuario.phone}</TableCell>
                  <TableCell>{usuario.website}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default Usuarios;
