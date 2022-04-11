import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
<<<<<<< HEAD
	return (
		<Nav className='justify-content-center mb-4'>
			<Nav.Item>
				{step1 ? (
					<LinkContainer to='/login'>
						<Nav.Link>Đăng nhập</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Đăng nhập</Nav.Link>
				)}
			</Nav.Item>

			<Nav.Item>
				{step2 ? (
					<LinkContainer to='/shipping'>
						<Nav.Link>Shipping</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Shipping</Nav.Link>
				)}
			</Nav.Item>

			<Nav.Item>
				{step3 ? (
					<LinkContainer to='/payment'>
						<Nav.Link>Thanh toán</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Thanh toán</Nav.Link>
				)}
			</Nav.Item>

			<Nav.Item>
				{step4 ? (
					<LinkContainer to='/placeorder'>
						<Nav.Link>Đặt hàng</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Đặt hàng</Nav.Link>
				)}
			</Nav.Item>
		</Nav>
	);
=======
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Đăng nhập</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Đăng nhập</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Giao hàng</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Giao hàng</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Thanh toán</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Thanh toán</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Đặt hàng</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Đặt hàng</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
>>>>>>> feature/Duy2
};

export default CheckoutSteps;
