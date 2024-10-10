import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ProductSection.css'; // For additional custom styling

const ProductSection = () => {
  const products = [
    {
      title: 'Starting ₹99 | Amazon Brands & more',
      images: [
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/QC_372_All_customer_july_2._SY232_CB567469224_.jpg', text: 'Starting ₹299 | Home storage &...' },
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/QC_372_All_customer_july_3._SY232_CB567469124_.jpg', text: 'Up to 60% off | Storage & racks' },
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_372_Updated._SY232_CB567468621_.jpg', text: 'Starting ₹99 | Toys & games' },
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/QC_372_All_customer_july_1._SY232_CB567469124_.jpg', text: 'Up to 60% off | Jackets, dresses' }
      ],
      linkText: 'Shop now'
    },
    {
      title: 'Starting ₹199 | Amazon Brands & more',
      images: [
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_2._SY232_CB567468220_.jpg', text: 'Starting ₹199 | Bedsheets' },
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_3._SY232_CB567468220_.jpg', text: 'Starting ₹199 | Curtains' },
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_4._SY232_CB567468220_.jpg', text: 'Minimum 40% off | Ironing board ' },
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_1._SY232_CB567468220_.jpg', text: 'Up to 60% off | Home decor' }
      ],
      linkText: 'See more'
    },
    {
      title: 'Automotive essentials | Up to 60% off',
      images: [
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare2x._SY232_CB410830552_.jpg', text: 'Cleaning accessories' },
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare2x._SY232_CB410830552_.jpg', text: 'Tyre & rim care' },
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_372x232._SY232_CB405083904_.jpg', text: 'Helmets' },
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum2x._SY232_CB410830555_.jpg', text: 'Vacuum cleaner' }
      ],
      linkText: 'See more'
    },
    {
      title: 'Up to 60% off | Styles for women',
      images: [
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-372-232._SY232_CB636048992_.jpg', text: "Women's Clothing" },
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-372-232._SY232_CB636048992_.jpg', text: 'Footwear+Handbags' },
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-372-232._SY232_CB636048992_.jpg', text: 'Watches' },
        { imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-372-232._SY232_CB636048992_.jpg', text: 'Fashion jewellery' }
      ],
      linkText: 'End of season sale'
    }
  ];

  return (
    <Container fluid className="product-section">
      <Row>
        {products.map((product, index) => (
          <Col key={index} lg={3} md={6} sm={12} className="mb-4">
            <Card className="product-card-home h-100">
              <Card.Body>
                <Card.Title style={{textAlign:"start",fontWeight:"bold"}}>{product.title}</Card.Title>
                <Row style={{height:"55vh"}}>
                  {product.images.map((image, imgIndex) => (
                    <Col key={imgIndex} xs={6} className="mb-3">
                      <img
                        src={image.imgSrc}
                        alt={image.text}
                        className="img-fluid product-image-home"
                      />
                      <p className="product-text-home" style={{textAlign:"start"}}>{image.text}</p>
                    </Col>
                  ))}
                </Row>
                <a href="/" className="product-link-home" style={{textAlign:"start",fontSize:"small"}}>{product.linkText}</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductSection;
