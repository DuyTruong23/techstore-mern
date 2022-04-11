<<<<<<< HEAD
import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
=======
import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
>>>>>>> feature/Duy2
import {
  listProducts,
  deleteProduct,
  createProduct,
<<<<<<< HEAD
} from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";
=======
} from '../actions/productActions';
import { PRODUCT_CREATE_RESET } from '../constants/productConstants';
>>>>>>> feature/Duy2

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
<<<<<<< HEAD
      history.push("/login");
=======
      history.push('/login');
>>>>>>> feature/Duy2
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
<<<<<<< HEAD
      dispatch(listProducts("", pageNumber));
=======
      dispatch(listProducts('', pageNumber));
>>>>>>> feature/Duy2
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
<<<<<<< HEAD
    if (window.confirm("Đã giao hàng thành công")) {
=======
    if (window.confirm('Are you sure')) {
>>>>>>> feature/Duy2
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
<<<<<<< HEAD
          <h1>Sản phẩm</h1>
=======
          <h1>QUẢN LÝ SẢN PHẨM</h1>
>>>>>>> feature/Duy2
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i> Thêm sản phẩm
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
<<<<<<< HEAD
                <th>Tên</th>
                <th>Giá</th>
                <th>Danh mục</th>
                <th>Thương hiệu</th>
=======
                <th>TÊN SẢN PHẨM</th>
                <th>GIÁ</th>
                <th>DANH MỤC</th>
                <th>THƯƠNG HIỆU</th>
>>>>>>> feature/Duy2
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>
<<<<<<< HEAD
                    $
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
=======
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    vnđ
>>>>>>> feature/Duy2
                  </td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default ProductListScreen;
