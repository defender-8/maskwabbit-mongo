import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import './TextImageRow.scss';

TextImageRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  img: PropTypes.string,
  imgSpan: PropTypes.number,
  reversed: PropTypes.bool,
};

function TextImageRow({ children, img, imgSpan, reversed, ...defaultRowProps }) {
  const textColProps = {
    xs: { span: 24, order: 1 },
    md: { span: 24 - imgSpan, order: reversed ? 0 : 1 },
  };

  const imgColProps = {
    xs: { span: 24, order: 0 },
    md: { span: imgSpan, order: reversed ? 1 : 0 },
  };

  return (
    <div className="TextImageRow">
      <Row gutter={[{ xs: 16, sm: 16, md: 32 }, { xs: 24, sm: 24, md: 0 }]} {...defaultRowProps}>
        <Col {...textColProps}>
          <div className="TextImageRow-text clearfix">
            {children}
          </div>
        </Col>
        <Col {...imgColProps}>
          <img src={img} alt="" className="TextImageRow-img imgResponsive" />
        </Col>
      </Row>
    </div>
  );
}

export default TextImageRow;
