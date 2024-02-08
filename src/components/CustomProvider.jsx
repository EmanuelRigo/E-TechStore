import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const contexto = createContext();
const Provider = contexto.Provider;

export const useCart = () => {
  const valorDelContexto = useContext(contexto);
  return valorDelContexto;
};

const CustomProvider = ({ children }) => {
  const [navBarCategory, setNavbarCategory] = useState([]);
  const [productAdded, setProductAdded] = useState({});
  const [valorbusqueda, setValorBusqueda] = useState();
  /*   const [ventas, setVentas] = useState(); */ //8-2-24
  const [totalVentas, setTotalVentas] = useState(0);
  const [valorEnvio, setValorEnvio] = useState(0);

  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );
  const [totalProductos, setTotalProductos] = useState(
    parseInt(localStorage.getItem("totalProductos")) || 0
  );

  const [total, setTotal] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const [busquedaCompra, setBusquedaCompra] = useState("");

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    localStorage.setItem("totalProductos", totalProductos.toString());
  }, [totalProductos]);

  useEffect(() => {
    calcularTotal();
  }, [carrito]);

  /////////PEDIDO A FIRESTORE////////

  const [bookdata, setBookdata] = useState([]);
  const [category, setCategory] = useState({});

  const productosCollection = collection(db, "products");

  useEffect(() => {
    if (category.categoria) {
      if (valorbusqueda) {
        const filtro = query(
          productosCollection,
          where("category", "==", category.categoria)
        );

        const pedidoFireStore = getDocs(filtro);

        pedidoFireStore.then((res) => {
          const documentArray = res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          const filtradoBuscar = documentArray.filter((item) =>
            item.title.toLowerCase().includes(valorbusqueda.toLowerCase())
          );
          setBookdata(filtradoBuscar);
        });
      } else {
        const filtro = query(
          productosCollection,
          where("category", "==", category.categoria)
        );

        const pedidoFireStore = getDocs(filtro);

        pedidoFireStore.then((res) => {
          const documentArray = res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          setBookdata(documentArray);
        });
      }
    } else {
      if (valorbusqueda) {
        const pedidoFireStore = getDocs(productosCollection);

        pedidoFireStore.then((res) => {
          const documentArray = res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          const filtradoBuscar = documentArray.filter((item) =>
            item.title.toLowerCase().includes(valorbusqueda.toLowerCase())
          );
          setBookdata(filtradoBuscar);
        });
      } else {
        const pedidoFireStore = getDocs(productosCollection);

        pedidoFireStore.then((res) => {
          const documentArray = res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          setBookdata(documentArray);
        });
      }
    }
  }, [category.categoria, valorbusqueda]);

  //////////////////////////////////

  ////FUNCIONES PARA BUSCAR////

  const funcionBuscar = () => {
    const filtradoBuscar = bookdata.filter((item) =>
      item.title.toLowerCase().includes(valorbusqueda.toLowerCase())
    );

    setBookdata(filtradoBuscar);
  };

  /////////////////////////////

  const addProduct = (contador, product) => {
    setProductAdded({ ...product, contador });
  };

  const incrementarCantidad = (id) => {
    const nuevosProductos = carrito.map((producto) =>
      producto.id === id
        ? { ...producto, cantidad: producto.cantidad + 1 }
        : producto
    );
    setCarrito(nuevosProductos);
  };

  const decrementarCantidad = (id) => {
    const nuevosProductos = carrito.map((producto) =>
      producto.id === id && producto.cantidad > 1
        ? { ...producto, cantidad: producto.cantidad - 1 }
        : producto
    );
    setCarrito(nuevosProductos);
  };

  const calcularTotal = () => {
    const cantidadTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad,
      0
    );
    setTotal(cantidadTotal);
  };

  const agregarProducto = (contador, pelicula) => {
    const copy = carrito.map((producto) => {
      if (producto.id === pelicula.id) {
        return { ...producto, cantidad: producto.cantidad + contador };
      }
      return producto;
    });
    if (!copy.some((prod) => prod.id === pelicula.id)) {
      copy.push({
        ...pelicula,
        cantidad: contador,
      });
    }

    setCarrito(copy);
    setTotalProductos(totalProductos + contador);
  };

  const eliminarProducto = (id) => {
    const copy = [...carrito];
    const index = copy.find((pelicula) => pelicula.id === id);
    setTotalProductos(totalProductos - index.cantidad);
    setCarrito(copy.filter((i) => i.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotalProductos(0);
  };

  const navbarCategoryFunction = (item) => {
    setNavbarCategory(item);
  };

  function addFavorites(item) {
    const productoExistente = favorites.find((prod) => prod.id === item.id);
    if (productoExistente) {
      const nuevosFavoritos = favorites.filter((prod) => prod.id !== item.id);
      setFavorites(nuevosFavoritos);
    } else {
      setFavorites([...favorites, item]);
    }
  }

  const eliminarFavorito = (id) => {
    const copy = [...favorites];
    const index = copy.find((item) => item.id === id);
    setTotalProductos(totalProductos - index.cantidad);
    setCarrito(copy.filter((i) => i.id !== id));
  };

  /////////CONSTRUCTOR DE CLIENTES/////////

  class Client {
    constructor(compras, datosEnvio, formasDePago, estaPagado) {
      this.compras = compras;
      this.datosEnvio = datosEnvio;
      this.formasDePago = formasDePago;
      this.estaPagado = estaPagado;
    }
  }

  const [addressInfo, setAddressInfo] = useState({});
  const [payInfo, setPayInfo] = useState({});
  /*  const [estaPagado, setEstaPagado] = useState(true); */ //8-2-24

  const cliente = new Client(carrito, addressInfo, payInfo);

  const [usuarios, setUsuarios] = useState([]);

  const sumarUsuario = () => {
    let copia = [...usuarios];
    copia.push(new Client(carrito, addressInfo, payInfo, true));
    setUsuarios(copia);
  };

  ////////////////////////////////////////

  const valorDelContexto = {
    carrito: carrito,
    totalProductos: totalProductos,
    navbarCategoryFunction: navbarCategoryFunction,
    navBarCategory: navBarCategory,
    agregarProducto: agregarProducto,
    eliminarProducto: eliminarProducto,
    vaciarCarrito: vaciarCarrito,
    addProduct: addProduct,
    productAdded: productAdded,
    incrementarCantidad: incrementarCantidad,
    calcularTotal: calcularTotal,
    total: total,
    decrementarCantidad: decrementarCantidad,
    funcionBuscar: funcionBuscar,
    bookdata: bookdata,
    setCategory: setCategory,
    setInputValue: setInputValue,
    inputValue: inputValue,
    setValorBusqueda: setValorBusqueda,
    setAddressInfo: setAddressInfo,
    cliente: cliente,
    setPayInfo: setPayInfo,
    /*  setEstaPagado: setEstaPagado, */ //8-2-24
    sumarUsuario: sumarUsuario,
    busquedaCompra: busquedaCompra,
    setBusquedaCompra: setBusquedaCompra,
    /*   ventas: ventas, */ //8-2-24
    setTotalVentas: setTotalVentas,
    totalVentas: totalVentas,
    valorEnvio: valorEnvio,
    setValorEnvio: setValorEnvio,
    addFavorites: addFavorites,
    favorites: favorites,
    eliminarFavorito: eliminarFavorito,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
