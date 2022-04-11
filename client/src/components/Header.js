import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
<<<<<<< HEAD
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<header className='fixed-top'>
			<Navbar
				bg='dark'
				className=''
				variant='dark'
				expand='lg'
				collapseOnSelect
			>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>Tech Store</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Route render={({ history }) => <SearchBox history={history} />} />
						<Nav className='ml-auto'>
							<LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart'></i> Giỏi hàng
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<NavDropdown title={userInfo.name} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Thông tin người dùng</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Đăng xuất
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<i className='fas fa-user'></i> Đăng nhập
									</Nav.Link>
								</LinkContainer>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Action' id='adminmenu'>
									<LinkContainer to='/admin/userlist'>
										<NavDropdown.Item>Người dùng</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/productlist'>
										<NavDropdown.Item>Sản phẩm</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orderlist'>
										<NavDropdown.Item>Đơn hàng</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
=======
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="fixed-top">
      <Navbar
        bg="dark"
        className=""
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Tech Store</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Giỏ hàng
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Thông tin người dùng</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Đăng xuất
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Đăng nhập
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Action" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Người dùng</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Sản phẩm</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Đơn hàng</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
>>>>>>> feature/Duy2
};

export default Header;
