import React from "react";
import Image1 from "../../asset/images/img1.png";
import Image2 from "../../asset/images/img2.png";
import Image3 from "../../asset/images/img3.png";
import Image4 from "../../asset/images/img4.png";
import Image5 from "../../asset/images/img5.png";
import Image6 from "../../asset/images/img6.png";
import Image7 from "../../asset/images/img7.png";
import Image8 from "../../asset/images/img8.png";
import {
  RowContainer,
  MockUpImageContainer,
  MockUpImages,
  ImageDescription,
} from "./style";

const MockUp = () => {
  return (
    <>
      <RowContainer>
        <MockUpImageContainer>
          <MockUpImages src={Image1} />
          <ImageDescription>Pizza order website</ImageDescription>
        </MockUpImageContainer>
        <MockUpImageContainer>
          <MockUpImages src={Image2} />
          <ImageDescription>Food Delivery Website</ImageDescription>
        </MockUpImageContainer>
      </RowContainer>
      <RowContainer>
        <MockUpImageContainer>
          <MockUpImages src={Image3} />
          <ImageDescription>Learning Platform</ImageDescription>
        </MockUpImageContainer>
        <MockUpImageContainer>
          <MockUpImages src={Image4} />
          <ImageDescription>Savings Mobile App</ImageDescription>
        </MockUpImageContainer>
      </RowContainer>
      <RowContainer>
        <MockUpImageContainer>
          <MockUpImages src={Image5} />
          <ImageDescription>Message Player Mobile App</ImageDescription>
        </MockUpImageContainer>
        <MockUpImageContainer>
          <MockUpImages src={Image6} />
          <ImageDescription>Investment Platform</ImageDescription>
        </MockUpImageContainer>
      </RowContainer>
      <RowContainer>
        <MockUpImageContainer>
          <MockUpImages src={Image7} />
          <ImageDescription>Medical Mobile App</ImageDescription>
        </MockUpImageContainer>
        <MockUpImageContainer>
          <MockUpImages src={Image8} />
          <ImageDescription>Radio monitoring Dashboard</ImageDescription>
        </MockUpImageContainer>
      </RowContainer>
    </>
  );
};

export default MockUp;
