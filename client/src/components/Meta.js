import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
<<<<<<< HEAD
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: 'Welcome To Tech Store',
	description: 'We sell the best products for technology',
	keywords: 'electronics, buy laptop, tech phone',
=======
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Tech Store',
>>>>>>> feature/Duy2
};

export default Meta;
