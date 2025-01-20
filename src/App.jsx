import React, { useEffect, useMemo, useState } from "react";
import {
  Layout,
  Menu,
  Button,
  Card,
  Row,
  Col,
  Form,
  Input,
  Typography,
  Tag,
  Progress,
  Image,
  Carousel,
} from "antd";
import "./App.css"; // Custom CSS for additional styling
import {
  CoffeeOutlined,
  FireOutlined,
  GithubOutlined,
  LinkedinOutlined,
  RightOutlined,
  TrophyOutlined,
  TwitterOutlined,
  UpOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CountUp from "react-countup";
import Avatar from "../src/assets/avatar.jpg";
import Case1 from "../src/assets/case1.png";
import Case2 from "../src/assets/case2.png";
import Case3 from "../src/assets/case3.png";
import Java from "../src/assets/java.png";
import ReactJs from "../src/assets/react.png";
import BootStrap from "../src/assets/bootstrap.png";
import SQL from "../src/assets/sql-server.png";
import PostgreSQL from "../src/assets/postgre.png";
import Work1 from "../src/assets/work1.svg";
import Work2 from "../src/assets/work2.svg";

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;
const { Title, Text } = Typography;

const App = () => {
  const texts = useMemo(() => ["Java Developer!", "React Developer!"], []); // Text to type
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Track current text index
  const [charIndex, setCharIndex] = useState(0); // Track character index
  const [isVisible, setIsVisible] = useState(false);

  const menus = useMemo(() => [
    {
      label: "Home",
      key: "home",
      style: "40px",
      className: "portfolio-header-menu",
    },
    {
      label: "About Me",
      key: "aboutMe",
      style: "40px",
      className: "portfolio-header-menu",
    },
    {
      label: "Case Studies",
      key: "caseStudy",
      style: "40px",
      className: "portfolio-header-menu",
    },
    {
      label: "Testimonials",
      key: "testimonials",
      style: "40px",
      className: "portfolio-header-menu",
    },
    {
      label: "Recent Work",
      key: "recentWork",
      style: "40px",
      className: "portfolio-header-menu",
    },
    {
      label: "Get In Touch",
      key: "getInTouch",
      style: "60px",
      className: "portfolio-header-menu",
    },
  ], []);

  const menusIcon = [
    {
      label: (
        <>
          <a
            href="https://github.com/ak-azad-dev"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Prevents security vulnerabilities
          >
            <GithubOutlined style={{ fontSize: "20px" }} />
          </a>
        </>
      ),
      key: "6",
      className: "portfolio-header-icon",
    },
    {
      label: (
        <>
          <a
            href="https://x.com/akazad47251753"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Prevents security vulnerabilities
          >
            <TwitterOutlined style={{ fontSize: "20px" }} />
          </a>
        </>
      ),
      key: "7",
      className: "portfolio-header-icon",
    },
    {
      label: (
        <>
          <a
            href="https://www.linkedin.com/in/md-abul-kalam-azad-54332b126"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Prevents security vulnerabilities
          >
            <LinkedinOutlined style={{ fontSize: "20px" }} />
          </a>
        </>
      ),
      key: "8",
      className: "portfolio-header-icon",
    },
  ];

  const [currentKey, setCurrentKey] = useState(menus[0]?.key || "");

  useEffect(() => {
    const handleScroll = () => {
      menus.forEach((menu) => {
        const section = document.getElementById(menu.key);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is in the viewport
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setCurrentKey(menu.key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menus]);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Typing effect for the current text
    if (charIndex < texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Delay between each character
      return () => clearTimeout(timeout);
    } else {
      // Pause before starting the next text
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Move to next text in array
      }, 1500); // Delay before clearing text
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentTextIndex, texts]);

  const handleClick = (key) => {
    setCurrentKey(key); // Update active key on click
    const targetElement = document.getElementById(key);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 64, // Offset for fixed header
        behavior: "smooth",
      });
    }
  };

  const handleScrollToSection = () => {
    document.getElementById("getInTouch").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const leftMenu = menus.map((menu) => ({
    key: menu.key,
    label: menu.label,
    style: { marginRight: menu.style }, // Example dynamic styling
    className: menu.className,
  }));

  const workedWith = [
    {
      name: "JAVA",
      image: Java, // Replace with actual image path
    },
    {
      name: "REACT",
      image: ReactJs, // Replace with actual image path
    },
    {
      name: "Bootstrap",
      image: BootStrap, // Replace with actual image path
    },
    {
      name: "MS SQL",
      image: SQL, // Replace with actual image path
    },
    {
      name: "PostgreSQL",
      image: PostgreSQL, // Replace with actual image path
    },
  ];

  const caseStudies = [
    {
      category: "Fintech",
      title: "Work name here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      buttonText: "View case study",
      buttonColor: "orange",
      image: Case1, // Replace with actual image path
    },
    {
      category: "EdTech",
      title: "Work name here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      buttonText: "View case study",
      buttonColor: "blue",
      image: Case2, // Replace with actual image path
    },
    {
      category: "Pharma",
      title: "Work name here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      buttonText: "View case study",
      buttonColor: "magenta",
      image: Case3, // Replace with actual image path
    },
  ];

  const testimonials = [
    {
      quote: "I had the privilege of working with Abul Kalam Azad on several challenging projects, and I can confidently say that he is one of the most talented and dedicated professionals I’ve ever met. His deep expertise as a Java Developer and React Developer shines through in every line of code he writes.",
      client: "John Doe, Senior Software Engineer",
    },
    {
      quote: "Abul's ability to seamlessly integrate robust backend systems with visually stunning and highly intuitive frontends is truly remarkable. His mastery of Ant Design, PostgreSQL, and MS SQL Server enables him to build scalable, efficient, and innovative solutions that exceed expectations.",
      client: "Jane Smith, Project Manager",
    },
    {
      quote: "Beyond his technical skills, Abul is a true team player, always willing to go the extra mile to help others and ensure project success. His problem-solving skills and attention to detail are unparalleled, making him an invaluable asset to any team.",
      client: "Michael Johnson, Team Lead",
    },
    {
      quote: "If you’re looking for someone to bring your ideas to life with precision and creativity, Abul Kalam Azad is the professional you need. I highly recommend him!",
      client: "Emily Davis, Product Owner",
    },
  ];

  const works = [
    { title: "Work A", description: "Creative design and development.", image: Work1 },
    { title: "Work B", description: "Innovative solutions for your needs.", image: Work2 },
    { title: "Work C", description: "Creative design and development.", image: Work1 },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header Section */}
      <Content
        id="home"
        className="portfolio-header-section"
        style={{ backgroundColor: "#080808" }}
      >
        <Header
          style={{
            position: "fixed", // Fix the header at the top
            top: 0, // Align it to the top of the page
            left: 0, // Ensure it starts from the left
            right: 0, // Ensure it spans the entire width
            zIndex: 1000, // Ensure it stays above other elements
            backgroundColor: "#1B1B1B",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            margin: "0 auto", // Center horizontally
            width: "1110px", // Set fixed width
          }}
        >
          <Menu
            selectedKeys={[currentKey]} // Highlight the active menu item
            theme="dark"
            mode="horizontal"
            style={{
              backgroundColor: "transparent",
              borderBottom: "none",
            }}
            onClick={(e) => handleClick(e.key)} // Update active key and scroll
            items={leftMenu.concat(menusIcon)} // Use dynamically created menu items
          />
        </Header>
      </Content>
      {/* Hero Section (Black Background) */}
      <Content className="portfolio-hero-section">
        <Row justify="center" align="middle" className="portfolio-row">
          <Col
            xs={24}
            md={12}
            style={{
              textAlign: "left", // Align all text to the left
            }}
          >
            {/* Heading */}
            <Title className="portfolio-title">ABUL KALAM AZAD</Title>

            {/* Paragraph */}
            <Text className="portfolio-intro">
              Hi, I'm a  {displayedText}
              <span className="blinking-cursor">|</span>
            </Text>

            {/* Button */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start", // Align button to the left
                width: "100%",
                marginTop: "20px",
              }}
            >
              <Button
                type="primary"
                style={{
                  background: "linear-gradient(to right, #3F8E00, #62BA1B)", // Gradient from green to dark green
                  borderColor: "#62BA1B", // Border color to match button's gradient
                  color: "white", // Text color for the button
                  height: "60px", // Adjust height for smaller screens
                  fontWeight: "bold", // Bold text on the button
                  minWidth: "150px", // Adjust button width
                  padding: "0 40px", // Adjust padding
                  fontSize: "1rem", // Adjust font size
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundImage =
                    "linear-gradient(135deg, #62BA1B, #3F8E00)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundImage =
                    "linear-gradient(135deg, #3F8E00, #62BA1B)";
                  e.target.style.transform = "translateY(0)";
                }}
                onClick={handleScrollToSection}
              >
                Hire Me{" "}
                <RightOutlined style={{ fontWeight: "bold" }} />
              </Button>
            </div>
          </Col>
          <Col
            xs={24}
            md={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "right",
              padding: "20px",
            }}
          >
            {/* Second Column: Profile Image */}
            <img
              src={Avatar} // Replace with your profile image URL
              alt="Profile"
              style={{
                borderRadius: "50%", // Make the image circular
                width: "90%", // Set image width for responsiveness
                maxWidth: "300px", // Limit the max width
                height: "auto", // Maintain aspect ratio
                objectFit: "cover", // Ensure the image fits within the square size
              }}
              onMouseEnter={(e) => {
                e.target.style.scale = "1.1";
                e.target.style.transition = "all 0.2s";
              }}
              onMouseLeave={(e) => {
                e.target.style.scale = "";
                e.target.style.transition = "";
              }}
            />
          </Col>
        </Row>
        <Row className="portfolio-worked-with">
          <div>
            <Text className="portfolio-worked-with-text">Worked with</Text>
            <Row justify="center" style={{ gap: "45px" }}>
              {workedWith.map(
                (record, idx) => (
                  <Col key={idx} className="portfolio-company">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Image
                        width={40} // Width of the image
                        height={40} // Height of the image (optional)
                        src={record.image} // Replace with your PNG URL or local path
                        alt="Icon"
                        preview={false} // Set to true to enable preview on click
                      />
                      {/* Replace with your preferred icon */}
                      <span>{record.name}</span>
                    </div>
                  </Col>
                )
              )}
            </Row>
          </div>
        </Row>
      </Content>

      {/* About Me Section */}
      <Content className="portfolio-about-me-section" id="aboutMe">
        <div
          style={{ padding: "40px 20px", maxWidth: "1020px", margin: "0 auto" }}
        >
          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Title level={2} style={{ fontSize: "34px", fontWeight: "bolder" }}>
              About Me
            </Title>
          </div>

          <div style={{ marginTop: "20px" }}>
            {/* Top Row: Avatar and Introduction */}
            <Row gutter={[16, 24]} align="middle">
              {/* Left Column: Avatar and Basic Info */}
              <Col xs={24} sm={8} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    backgroundColor: "#e0e0e0",
                    margin: "0 auto 10px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={Avatar}
                    alt="avatar"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <p style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>
                  Abul Kalam Azad
                </p>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Full Stack Web Developer, Dhaka, BD
                </p>
              </Col>

              {/* Right Column: Introduction */}
              <Col xs={24} sm={16}>
                <div style={{ padding: "10px 20px" }}>
                  <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
                    I am a skilled and dedicated Java Developer and React Developer with
                    a passion for creating robust, scalable, and efficient software
                    solutions. With expertise in both backend and frontend technologies, I
                    excel in building full-stack applications that seamlessly integrate
                    functionality with exceptional user experiences.
                  </p>
                  <Button
                    type="primary"
                    style={{
                      background: "linear-gradient(to right, #3F8E00, #62BA1B)",
                      borderColor: "#62BA1B",
                      color: "white",
                      height: "60px",
                      fontWeight: "bold",
                      minWidth: "150px",
                      padding: "0 40px",
                      fontSize: "1rem",
                      borderRadius: "20px",
                      margin: "10px 0",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundImage =
                        "linear-gradient(135deg, #62BA1B, #3F8E00)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundImage =
                        "linear-gradient(135deg, #3F8E00, #62BA1B)";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    Download CV
                  </Button>
                </div>
              </Col>
            </Row>

            {/* Bottom Row: Progress Bars */}
            <Row gutter={[35, 16]} style={{ marginTop: "20px" }}>
              <Col xs={24} sm={12}>
                <p style={{ fontWeight: "bold", margin: "5px 0" }}>Java Development</p>
                <Progress percent={90} strokeColor="#ffc107" />
              </Col>
              <Col xs={24} sm={12}>
                <p style={{ fontWeight: "bold", margin: "5px 0" }}>React Development</p>
                <Progress percent={95} strokeColor="#00bcd4" />
              </Col>
              <Col xs={24} sm={12}>
                <p style={{ fontWeight: "bold", margin: "5px 0" }}>
                  Ant Design Expertise
                </p>
                <Progress percent={85} strokeColor="#ff5252" />
              </Col>
              <Col xs={24} sm={12}>
                <p style={{ fontWeight: "bold", margin: "5px 0" }}>PostgreSQL</p>
                <Progress percent={90} strokeColor="#5c63d8" />
              </Col>
              <Col xs={24} sm={12}>
                <p style={{ fontWeight: "bold", margin: "5px 0" }}>MS SQL Server</p>
                <Progress percent={85} strokeColor="#4caf50" />
              </Col>
            </Row>
          </div>

          {/* Footer Stats */}
          <Row
            gutter={[16, 16]}
            style={{
              marginTop: "30px",
              borderTop: "1px solid #f0f0f0",
              paddingTop: "20px",
              textAlign: "center",
            }}
          >
            <Col xs={6}>
              <div>
                <FireOutlined style={{ fontSize: "24px", color: "#ff5252" }} />
                <h3 style={{ color: "#333", margin: "5px 0", fontWeight: 'bolder' }}>
                  <CountUp end={198} duration={2} />
                </h3>
                <p style={{ fontSize: "12px", color: "#999" }}>
                  Projects Completed
                </p>
              </div>
            </Col>
            <Col xs={6}>
              <div>
                <CoffeeOutlined style={{ fontSize: "24px", color: "#ffc107" }} />
                <h3 style={{ color: "#333", margin: "5px 0", fontWeight: 'bolder' }}>
                  <CountUp end={5670} duration={2} />
                </h3>
                <p style={{ fontSize: "12px", color: "#999" }}>Cup of Coffee</p>
              </div>
            </Col>
            <Col xs={6}>
              <div>
                <UserOutlined style={{ fontSize: "24px", color: "#5c63d8" }} />
                <h3 style={{ color: "#333", margin: "5px 0", fontWeight: 'bolder' }}>
                  <CountUp end={427} duration={2} />
                </h3>
                <p style={{ fontSize: "12px", color: "#999" }}>
                  Satisfied Clients
                </p>
              </div>
            </Col>
            <Col xs={6}>
              <div>
                <TrophyOutlined style={{ fontSize: "24px", color: "#ff5252" }} />
                <h3 style={{ color: "#333", margin: "5px 0", fontWeight: 'bolder' }}>
                  <CountUp end={35} duration={2} />
                </h3>
                <p style={{ fontSize: "12px", color: "#999" }}>
                  Nominees Winner
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Content>

      {/* Case study Section */}
      <Content className="portfolio-case-study-section" id="caseStudy">
        <div
          style={{ padding: "50px 20px", maxWidth: "1020px", margin: "0 auto" }}
        >
          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Title level={2} style={{ fontSize: "34px", fontWeight: "bolder", color: "#FFFFFF" }}>
              Case Studies
            </Title>
            <Text className="portfolio-case-study-intro">
              Solving user & business problems since last 15+ years.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>

          {/* Case Studies */}
          {caseStudies.map((study, index) => (
            <Row
              key={index}
              gutter={[40, 40]}
              align="middle"
              style={{
                marginBottom: "40px",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse", // Alternate layout
              }}
            >
              {/* Text Content */}
              <Col xs={24} md={12}>
                <Tag
                  color={study.buttonColor}
                  style={{
                    color: study.buttonColor,
                    fontWeight: "bold",
                    padding: "5px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {study.category}
                </Tag>
                <Title level={3} style={{ fontWeight: "bolder", color: "#FFFFFF" }}>
                  {study.title}
                </Title>
                <Text
                  style={{
                    display: "block",
                    marginBottom: "20px",
                    lineHeight: "1.8",
                    whiteSpace: "normal",
                    color: "#FFFFFF"
                  }}
                >
                  {study.description}
                </Text>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: study.buttonColor,
                    borderColor: study.buttonColor,
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "8px 20px",
                    borderRadius: "4px",
                  }}
                >
                  {study.buttonText}
                </Button>
              </Col>

              {/* Image */}
              <Col xs={24} md={12}>
                <img
                  src={study.image}
                  alt={study.title}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </Col>
            </Row>
          ))}
        </div>
      </Content>

      {/* Testimonials Section */}
      <Content
        id="testimonials"
        style={{
          backgroundColor: "#FFFFFF",
          padding: "40px 20px",
          color: "#333",
          textAlign: "center",
        }}
      >
        <Title level={2} style={{ fontSize: "34px", fontWeight: "bolder", color: "#000000" }}>
          Testimonials
        </Title>

        <Carousel
          autoplay
          dotPosition="bottom"
          style={{ maxWidth: "800px", margin: "0 auto" }}
          className="custom-carousel"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                backgroundColor: "#f5f5f5",
                borderRadius: "10px",
                margin: "0 10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <blockquote
                style={{
                  fontStyle: "italic",
                  fontSize: "20px",
                  lineHeight: "1.5",
                  color: "#555",
                  marginBottom: "20px",
                }}
              >
                "{testimonial.quote}"
              </blockquote>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                - {testimonial.client}
              </p>

            </div>
          ))}
        </Carousel>
      </Content>

      {/* Recent Work Section */}
      <Content
        id="recentWork"
        style={{
          backgroundColor: "#000000",
          padding: "40px 20px",
          color: "#333",
          textAlign: "center",
        }}
      >
        <Title level={2} style={{ fontSize: "34px", fontWeight: "bolder", color: "#FFFFFF" }}>
          Recent Work
        </Title>
        <Row gutter={[16, 16]} style={{ maxWidth: "1020px", margin: "0 auto", padding: "0 20px" }}>
          {works.map((work, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                cover={
                  <img
                    alt={work.title}
                    src={work.image}
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      filter: "brightness(90%)",
                      transition: "filter 0.3s ease",
                    }}
                  />
                }
                onMouseEnter={(e) =>
                  e.currentTarget.style.transform = "scale(1.05)"
                }
                onMouseLeave={(e) =>
                  e.currentTarget.style.transform = "scale(1)"
                }
              >
                <Card.Meta
                  title={
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "20px",
                        color: "#62BA1B",
                      }}
                    >
                      {work.title}
                    </h3>
                  }
                  description={
                    <p
                      style={{
                        marginTop: "8px",
                        fontSize: "14px",
                        color: "#555",
                      }}
                    >
                      {work.description}
                    </p>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      {/* Contact Form Section */}
      <Content
        id="getInTouch"
        style={{
          backgroundColor: "#fff",
          padding: "40px 20px",
          color: "#333",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "36px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Get In Touch
        </h2>
        <Form
          layout="vertical"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <Row gutter={16}>
            {/* Name Field */}
            <Col xs={24} sm={12}>
              <Form.Item
                label={
                  <span style={{ color: "#333", fontWeight: "500" }}>Name</span>
                }
                name="name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input
                  placeholder="Enter your name"
                  style={{
                    borderRadius: "6px",
                    padding: "10px",
                    border: "1px solid #d9d9d9",
                    backgroundColor: "#fff",
                    color: "#333",
                  }}
                />
              </Form.Item>
            </Col>
            {/* Email Field */}
            <Col xs={24} sm={12}>
              <Form.Item
                label={
                  <span style={{ color: "#333", fontWeight: "500" }}>Email</span>
                }
                name="email"
                rules={[{ required: true, message: "Please enter your email!" }]}
              >
                <Input
                  placeholder="Enter your email"
                  style={{
                    borderRadius: "6px",
                    padding: "10px",
                    border: "1px solid #d9d9d9",
                    backgroundColor: "#fff",
                    color: "#333",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          {/* Message Field */}
          <Form.Item
            label={
              <span style={{ color: "#333", fontWeight: "500" }}>Message</span>
            }
            name="message"
            rules={[{ required: true, message: "Please enter your message!" }]}
          >
            <TextArea
              rows={4}
              placeholder="Enter your message"
              style={{
                borderRadius: "6px",
                padding: "10px",
                border: "1px solid #d9d9d9",
                backgroundColor: "#fff",
                color: "#333",
              }}
            />
          </Form.Item>
          {/* Submit Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              type="primary"
              style={{
                background: "linear-gradient(to right, #3F8E00, #62BA1B)", // Gradient from green to dark green
                borderColor: "#62BA1B", // Border color to match button's gradient
                color: "white", // Text color for the button
                height: "50px", // Adjust height for smaller screens
                fontWeight: "bold", // Bold text on the button
                minWidth: "150px", // Adjust button width
                padding: "0 40px", // Adjust padding
                fontSize: "1rem", // Adjust font size
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundImage =
                  "linear-gradient(135deg, #62BA1B, #3F8E00)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundImage =
                  "linear-gradient(135deg, #3F8E00, #62BA1B)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Content>

      {/* Footer Section */}
      <Footer
        style={{ textAlign: "center", backgroundColor: "#111", color: "#fff" }}
      >
        Made with ❤️ by Azad
      </Footer>

      {/* Scroll To Top */}
      {isVisible && (
        <Button
          type="primary"
          shape="circle"
          icon={<UpOutlined />}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            background: "linear-gradient(135deg, #3F8E00, #62BA1B)", // Gradient color
            border: "none",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            height: '40px',
            width: '40px'
          }}
          onClick={scrollToTop}
        />
      )}
    </Layout>
  );
};

export default App;
