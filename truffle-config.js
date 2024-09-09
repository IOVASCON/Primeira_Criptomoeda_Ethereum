module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*", // Qualquer ID de rede
      },
    },
    compilers: {
      solc: {
        version: "0.8.0",
      },
    },
  };
  