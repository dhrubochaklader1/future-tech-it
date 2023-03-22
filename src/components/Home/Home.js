import React from "react";
import Carousel from "react-bootstrap/Carousel";
import one from "../../images/one.jpg";
import two from "../../images/two.jpg";
import three from "../../images/three.jpeg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Home.css";
import { Container } from "react-bootstrap";
import four from "../../images/four.jpg";
import five from "../../images/five.jpg";
import six from "../../images/six.jpg";
import seven from "../../images/seven.jpg";
import eight from "../../images/eight.jpg";
import nine from "../../images/nine.jpg";
import ten from "../../images/ten.jpeg";
import eleven from "../../images/eleven.jfif";
import twelve from "../../images/twelve.jfif";
import thirteen from "../../images/thirteen.jfif";
import fourteen from "../../images/fourteen.jfif";
import fifteen from "../../images/fifteen.jfif";
import sixteen from "../../images/sixteen.jfif";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Carousel className="mb-4">
        <Carousel.Item interval={1000}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="d-block w-100" src={one} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="d-block w-100" src={two} alt="Second slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="d-block w-100" src={three} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="d-block w-100" src={ten} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="d-block w-100" src={eleven} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="d-block w-100" src={twelve} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="d-block w-100" src={thirteen} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="d-block w-100" src={fourteen} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="d-block w-100" src={fifteen} alt="Third slide" />
          </div>
        </Carousel.Item>
      </Carousel>
      <Container>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={four} />
              <Card.Body>
                <Card.Title>Graphic design</Card.Title>
                <Card.Text>
                  গ্রাফিক্স ডিজাইন হল একটি আর্ট বা শিল্প।এখানে একজন শিল্পী
                  কম্পিউটার সফ্টওয়্যার এর মাধ্যমে কল্পনা, তথ্য এবং গ্রাহকদের
                  ধারণা গুলির সাথে যোগাযোগ করার জন্য, দৃশ্যমান ধারণা তৈরি করে।
                  গ্রাফিক্স শব্দটি জার্মান শব্দ থেকে এসেছে।এক কথায় চিত্র দ্বারা
                  নকশা তৈরি করাকে গ্রাফিক্স ডিজাইন বলা হয়। এটি এমন একটি জনপ্রিয়
                  এবং সৃজনশীল প্রক্রিয়া যেখানে আপনি নিজের ক্রিয়েটিভিটিকে
                  প্রফেশনে বদলে দিতে পারেন।
                </Card.Text>
                <h4>
                  Graphic Design : Main Price -{" "}
                  <del style={{ color: "red" }}>25,000</del>/-, Discount Price -
                  12,000/-
                </h4>
                <h5>Duration : 3 months</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={five} />
              <Card.Body>
                <Card.Title>Web design</Card.Title>
                <Card.Text>
                  বর্তমানে আমরা ভালো একটি চাকরি চাওয়ার জন্য বিভিন্ন কোর্স বা
                  শিক্ষা গ্রহন করে থাকি। এজন্য ওয়েব ডিজাইন কোর্স করে বা এ
                  সম্পর্কে শিখো আমরা অনেক ভালো চাকরি পেয়ে যেতে পারি। তাছাড়া web
                  design বিষয়ে যদি আপনার ভালো দক্ষতা, স্কিল (skill) থাকে তাহালে
                  ওয়েব ডিজাইন বিসনেস শুরু করতে পারবেন।
                </Card.Text>
                <h4>
                  Web Design : Main Price -{" "}
                  <del style={{ color: "red" }}>25,000</del>/-, Discount Price -
                  12,000/-
                </h4>
                <h5>Duration : 3 months</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={six} />
              <Card.Body>
                <Card.Title>AutoCAD 2D and 3D</Card.Title>
                <Card.Text>
                  এমন একটি সফটওয়্যার যা সিভিল ইঞ্জিনিয়ারিং এর এই ধরণের ডিজাইনিং
                  এর কাজে বিভিন্ন ইঞ্জিনিয়ারিং ফার্মে ও ফ্যাক্টরিতে বহুল ব্যবহৃত
                  হয়। বিভিন্ন সহজ ও জটিল নকশা তৈরির জন্য ডিজাইনারদের প্রথম
                  পছন্দই হল অটোক্যাড। অটোক্যাড হল একটি Computer Aided Design
                  software যা 2-D ও 3-D ডিজাইনে বহুল ব্যবহৃত হয়। এর প্রস্তুতকারক
                  ও প্রকাশক হল Autodesk Inc. পিসিতে প্রথম দিকের Computer Aided
                  Design এর সফটওয়্যার গুলার একটি হল অটোক্যাড। প্রায় ৩৭ বছর যাবত
                  এই অটোক্যাড সফটওয়্যার রাজত্ব করছে এবং ভবিষ্যতেও করবে।
                </Card.Text>
                <h4>
                  AutoCAD 2D and 3D : Main Price -{" "}
                  <del style={{ color: "red" }}>25,000</del>/-, Discount Price -
                  12,000/-
                </h4>
                <h5>Duration : 3 months</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={seven} />
              <Card.Body>
                <Card.Title>3DS Max (Interior & Exterior Design)</Card.Title>
                <Card.Text>
                  কোন আ্যানিমেশনকে যখন 3D তে রুপ দেওয়া হয় সেটাই 3D animation.
                  একজন 3D animator হিসেবে আপনার কাজ হল সফটওয়্যারের মাধ্যমে
                  ভিডিও, সিনেমা ও গেমসহ বিভিন্ন ডিজিটাল অ্যাপ্লিকেশনের জন্য
                  থ্রিডি আ্যানিমেশন ও গ্রাফিক্স তৈরী করা হয়. এজন্য আমাদের কোর্স
                  সাজানো হয়েছে স্টরিবোর্ড সাজানো থেকে শুরু করে ক্যারেক্টার
                  মডেলিং আর প্রোডাক্ট মডেলিংসহ বিভিন্ন ইন্টারেস্টিং জিনিস দিয়ে.
                  রেন্ডারিং আর এডিটিং বা লাইটিং এর প্রাথমিক বিষয় সম্পর্কে
                  পরিষ্কার ধারণা পাবেন সার্টিফাইড এই কোর্স থেকে.
                </Card.Text>
                <h4>
                  3D studio Max : Main Price -{" "}
                  <del style={{ color: "red" }}>40,000</del>/- Discount Price -
                  20,000/-
                </h4>
                <h5>Duration : 5 months</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={eight} />
              <Card.Body>
                <Card.Title>Motion Graphics</Card.Title>
                <Card.Text>
                  যেমন কোন ফিল্ম দেখার আগে আমরা যে টাইটেল এনিমেশন দেখি বা টিভি
                  তে কোন সিরিয়াল দেখার আগে যে সেই সিরিয়ালটির নাম এর এনিমেশন
                  দেখি অথবা ওয়েব সাইট এর ব্যানারে যখন কোন নাম ঘুরতে ঘুরতে সামনে
                  আসে এইগুলো কেই মোশন গ্রাফিক্স বলে।
                </Card.Text>
                <h4>
                  Motion Graphics : Main Price -{" "}
                  <del style={{ color: "red" }}>25,000</del>/-, Discount Price -
                  12,000/-
                </h4>
                <h5>Duration : 3 months</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={nine} />
              <Card.Body>
                <Card.Title>Video Editing</Card.Title>
                <Card.Text>
                  ভিডিও এডিটিং একটি ক্রিয়েটিভ স্কিল, কোন ভিডিও কে গল্প এবং
                  অনুভূতিতে রূপান্তরিত করার পদ্ধতি। সহজ কথায়, ভিডিও এডিটিং
                  হচ্ছে গল্পের প্রয়োজনে ধারণ করা ভিডিও ফুটেজ সম্পাদন করে
                  পূর্ণাঙ্গ গল্পে পরিণত করা। আমরা মুভিতে যে দৃশ্য গুলো দেখি
                  সেগুলো আসলে ভিডিও এডিটিং এর পরের ফাইনাল কাট।
                </Card.Text>
                <h4>
                  Video Editing : Main Price -{" "}
                  <del style={{ color: "red" }}>25,000</del>/-, Discount Price -
                  12,000/-
                </h4>
                <h5>Duration : 3 months</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="description mt-4 mb-4">
        <p>
          ক্রিয়েটিভ গ্রাফিক্স ডিজাইন ফর ফ্রিল্যান্সিং ও চাকুরী ফ্রি সেমিনার !
          ফ্রিল্যান্সিং ও চাকরী তে যারা ক্যারিয়ার গড়তে চান তাদের জন্য ফিউচার টেক
          সফট্ আইটিতে এলো ফ্রি সেমিনার। যারা বুঝতে পারছেন না কিভাবে
          ফ্রিল্যান্সিং শুরু করবেন। তাদের জন্য আমাদের এই উন্মুক্ত সেমিনার।
          আপওয়ার্ক , ফাইবার , ফ্রিল্যান্সার সম্পর্কে জানতে পারবেন এই সেমিনার
          থেকে। গ্রাফিক্স ডিজাইন শিখে এ সকল মার্কেটপ্লেস এর মাধ্যমে কিভাবে ইনকাম
          করতে পারবেন এই সেমিনার থেকে জানতে পারবেন। শুধু গ্রাফিক্স ডিজাইন শিখলেই
          হবে না কিভাবে ইনকাম করতে হয় তাও জানতে হবে আপনাকে। যাদের এ বিষয়ে ধারণা
          নেই , তারা এই সেমিনার টি অংশগ্রহণ করে অজানা বিষয়ে জানতে পারবেন। তারপর
          সহজেই আপনি আপনার সিদ্ধান্ত নিতে পারবেন।
        </p>
      </div>
      <Container>
        <div className="d-flex align-items-center justify-content-center free">
          <img className="w-75" src={sixteen} alt="" />
        </div>
      </Container>
    </>
  );
};

export default Home;
