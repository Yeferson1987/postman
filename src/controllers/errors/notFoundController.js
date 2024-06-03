// Función controladora final del middleware de ruta no encontrada.
const notFoundController = (req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Ruta no encontrada',
    });
};

export default notFoundController;
