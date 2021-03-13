import React from 'react';
import { Button } from "antd";
import { Col } from "antd";
import { Divider } from "antd";
import { Layout } from "antd";
import { Row } from "antd";
import { Switch } from "antd";
import { Typography } from "antd";
import { FacebookFilled } from "@ant-design/icons";
import { InstagramFilled } from "@ant-design/icons";
import { MinusOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { RightOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { WifiOutlined } from "@ant-design/icons";

function WooCommerceAntUI(props) {
  return (
    <div>
      <Layout style={{ overflow: "hidden" }}>
        <Layout style={{ backgroundColor: "#e6f0ff" }}>
          <Row
            align="middle"
            justify="space-between"
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Col>
              <img src="https://i.imgur.com/0OmVM1H.png"></img>
            </Col>
            <Col>
              <Row
                align="middle"
                justify="space-between"
                style={{ marginTop: "-18px" }}
              >
                <Col>
                  <Button
                    type="link"
                    size="large"
                    style={{ color: "#000000", fontSize: "20px" }}
                  >
                    Sell
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="link"
                    size="large"
                    style={{ color: "#000000", fontSize: "20px" }}
                  >
                    Marketplace
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="link"
                    size="large"
                    style={{ color: "#000000", fontSize: "20px" }}
                  >
                    Community
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="link"
                    size="large"
                    style={{ color: "#000000", fontSize: "20px" }}
                  >
                    Develop
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="link"
                    size="large"
                    style={{ color: "#000000", fontSize: "20px" }}
                  >
                    Resources
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row align="middle" gutter={30} justify="space-between">
                <Col>
                  <Button
                    size="large"
                    type="link"
                    style={{
                      color: "#000000",
                      fontSize: "20px",
                      marginTop: "-20px",
                    }}
                  >
                    Log In
                  </Button>
                </Col>
                <Col>
                  <Button
                    size="large"
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#7854F7",
                      paddingTop: "5px",
                      color: "#ffffff",
                      paddingLeft: "25px",
                      paddingBottom: "10px",
                      fontSize: "20px",
                      height: "auto",
                      paddingRight: "25px",
                    }}
                  >
                    Get Started
                  </Button>
                </Col>
                <Col>
                  <SearchOutlined style={{ fontSize: "25px" }} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Layout>
        <Layout>
          <Row align="middle" justify="center">
            <Col
              lg={11}
              xs={24}
              style={{ paddingTop: "100px", paddingLeft: "50px" }}
            >
              <Row>
                <Col>
                  <Typography.Title
                    level={1}
                    style={{
                      color: "#272D4E",
                      fontSize: "55px",
                      marginRight: "50px",
                    }}
                  >
                    Building exactly the eCommerce website you want.
                  </Typography.Title>
                </Col>
                <Col style={{ paddingTop: "10px" }}>
                  <Typography.Title level={4} style={{ color: "#272D4E" }}>
                    WooCommerce is a customizable, open-source eCommerce
                    platform built on WordPress. Get started quickly and make
                    your way.
                  </Typography.Title>
                </Col>
                <Col style={{ paddingTop: "20px" }}>
                  <Row align="middle" gutter={10}>
                    <Col>
                      <Button
                        style={{
                          backgroundColor: "#7854F7",
                          borderRadius: "50px",
                          paddingTop: "10px",
                          color: "#ffffff",
                          paddingLeft: "30px",
                          fontSize: "20px",
                          paddingBottom: "15px",
                          height: "auto",
                          paddingRight: "30px",
                        }}
                      >
                        Start a New Store
                      </Button>
                    </Col>
                    <Col>
                      <Typography.Text style={{ fontSize: "20px" }}>
                        or
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Row align="middle">
                        <Col>
                          <Button
                            type="link"
                            size="large"
                            style={{
                              color: "#29AAF3",
                              fontSize: "17px",
                              fontWeight: "600",
                            }}
                          >
                            Customize &amp; Extend{" "}
                          </Button>
                        </Col>
                        <Col>
                          <RightOutlined
                            style={{
                              color: "#29AAF3",
                              fontSize: "15px",
                              marginLeft: "-10px",
                            }}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col
              xs={24}
              lg={12}
              style={{ paddingTop: "160px", paddingLeft: "70px" }}
            >
              <Row>
                <Col span={12} style={{ position: "relative" }}>
                  <img
                    src="https://i.imgur.com/HbYOC0n.png"
                    style={{ width: "300px", height: "370px" }}
                  ></img>
                  <div
                    style={{
                      top: "-70px",
                      left: "-50px",
                      position: "absolute",
                    }}
                  >
                    <img
                      src="https://i.imgur.com/LsQTLQB.png"
                      style={{ borderRadius: "15px", width: "200px" }}
                    ></img>
                  </div>
                  <div
                    style={{
                      top: "-25px",
                      left: "160px",
                      position: "absolute",
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "#70C217",
                        borderRadius: "50px",
                        paddingTop: "7px",
                        color: "#ffffff",
                        letterSpacing: "10px",
                        paddingLeft: "30px",
                        paddingBottom: "10px",
                        fontSize: "20px",
                        height: "auto",
                        paddingRight: "20px",
                      }}
                    >
                      SALE
                    </Button>
                  </div>
                  <div
                    style={{
                      left: "-30px",
                      bottom: "40px",
                      position: "absolute",
                    }}
                  >
                    <Button
                      type="default"
                      style={{
                        backgroundColor: "#FFBA49",
                        borderRadius: "50px",
                        padding: "16px",
                        height: "auto",
                      }}
                    >
                      <img src="https://i.imgur.com/vHQTa52.png"></img>
                    </Button>
                  </div>
                  <div
                    style={{
                      left: "80px",
                      bottom: "-130px",
                      position: "absolute",
                    }}
                  >
                    <Row
                      align="middle"
                      justify="space-between"
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        paddingTop: "30px",
                        paddingLeft: "30px",
                        width: "340px",
                        paddingBottom: "30px",
                        paddingRight: "20px",
                      }}
                    >
                      <Col span={24}>
                        <Row align="middle" justify="space-around">
                          <Col span={8}>
                            <img src="https://i.imgur.com/qgjaL7Z.png"></img>
                          </Col>
                          <Col span={12}>
                            <Typography.Text
                              style={{
                                fontSize: "15px",
                                color: "#94A2B3",
                                fontWeight: "600",
                                paddingLeft: "10px",
                              }}
                            >
                              Stripe gateway
                            </Typography.Text>
                          </Col>
                          <Col span={4}>
                            <Switch style={{ backgroundColor: "#70C217" }} />
                          </Col>
                        </Row>
                      </Col>
                      <Divider
                        style={{
                          backgroundColor: "#E5EFFF",
                          marginTop: "10px",
                        }}
                      />
                      <Col span={24}>
                        <Row
                          align="middle"
                          justify="space-around"
                          style={{ marginTop: "-15px" }}
                        >
                          <Col span={8}>
                            <img src="https://i.imgur.com/gfl2wDS.png"></img>
                          </Col>
                          <Col span={12}>
                            <Typography.Text
                              style={{
                                fontSize: "15px",
                                color: "#94A2B3",
                                fontWeight: "600",
                                paddingLeft: "10px",
                              }}
                            >
                              Paypal payments
                            </Typography.Text>
                          </Col>
                          <Col span={4}>
                            <Switch style={{ backgroundColor: "#70C217" }} />
                          </Col>
                        </Row>
                      </Col>
                      <Divider
                        plain
                        style={{
                          backgroundColor: "#E5EFFF",
                          marginTop: "10px",
                        }}
                      />
                      <Col span={24}>
                        <Row align="middle" justify="space-around">
                          <Col span={8}>
                            <img src="https://i.imgur.com/S5Gr5Os.png"></img>
                          </Col>
                          <Col span={12}>
                            <Typography.Text
                              style={{
                                fontSize: "15px",
                                color: "#94A2B3",
                                fontWeight: "600",
                                paddingLeft: "10px",
                              }}
                            >
                              Bank Transfers
                            </Typography.Text>
                          </Col>
                          <Col span={4}>
                            <Switch style={{ backgroundColor: "#8161F7" }} />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col
                  span={12}
                  style={{ paddingLeft: "50px", paddingRight: "10px" }}
                >
                  <Row
                    align="middle"
                    gutter={30}
                    justify="start"
                    style={{ paddingTop: "20px" }}
                  >
                    <Col>
                      <Typography.Text
                        style={{
                          color: "#272D4E",
                          fontWeight: "600",
                          letterSpacing: "5px",
                        }}
                      >
                        SHOES
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Typography.Text
                        style={{ color: "#868686", fontWeight: "600" }}
                      >
                        Adidas Originals
                      </Typography.Text>
                    </Col>
                  </Row>
                  <Row style={{ paddingTop: "20px" }}>
                    <Col>
                      <Typography.Title level={2} style={{ fontSize: "27px" }}>
                        Adidas Originals OG Sneakers
                      </Typography.Title>
                    </Col>
                  </Row>
                  <Row
                    align="middle"
                    justify="space-between"
                    style={{ paddingTop: "10px" }}
                  >
                    <Col>
                      <Button
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F6F6F6",
                          color: "#868686",
                        }}
                      >
                        7
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F6F6F6",
                          color: "#868686",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                        }}
                      >
                        7.5
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F6F6F6",
                          color: "#868686",
                        }}
                      >
                        8
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F6F6F6",
                          color: "#868686",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                        }}
                      >
                        8.5
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F6F6F6",
                          color: "#868686",
                        }}
                      >
                        9
                      </Button>
                    </Col>
                  </Row>
                  <Row justify="space-between" style={{ paddingTop: "20px" }}>
                    <Col>
                      <Row style={{ display: "block" }}>
                        <Col>
                          <i
                            className="fas fa-dollar-sign"
                            style={{
                              color: "#7854F7",
                              fontSize: "20px",
                              letterSpacing: "1px",
                            }}
                          >
                            <Typography.Text
                              style={{
                                color: "#7854F7",
                                fontSize: "25px",
                                fontWeight: "600",
                              }}
                            >
                              344
                            </Typography.Text>
                          </i>
                        </Col>
                        <Col style={{ paddingTop: "5px" }}>
                          <i
                            className="fas fa-dollar-sign"
                            style={{
                              fontSize: "16px",
                              color: "#868686",
                              textDecoration: "line-through",
                              letterSpacing: "1px",
                              paddingLeft: "20px",
                            }}
                          >
                            <Typography.Text
                              style={{
                                color: "#868686",
                                fontSize: "20px",
                                fontWeight: "600",
                              }}
                            >
                              344
                            </Typography.Text>
                          </i>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row
                        style={{
                          backgroundColor: "#F6F6F6",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      >
                        <Button type="link" style={{ color: "#222222" }}>
                          <MinusOutlined />
                        </Button>
                        <Button type="link" style={{ color: "#222222" }}>
                          1
                        </Button>
                        <Button type="link" style={{ color: "#222222" }}>
                          <PlusOutlined />
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                  <Row
                    align="middle"
                    justify="center"
                    style={{
                      backgroundColor: "#7854F7",
                      marginLeft: "90px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      marginTop: "30px",
                    }}
                  >
                    <Col>
                      <Button
                        type="link"
                        style={{
                          color: "#ffffff",
                          fontWeight: "600",
                          height: "auto",
                        }}
                      >
                        Add to cart
                      </Button>
                    </Col>
                  </Row>
                  <div
                    style={{
                      left: "170px",
                      bottom: "-50px",
                      position: "absolute",
                    }}
                  >
                    <Button
                      style={{
                        border: "none",
                        borderRadius: "30px",
                        paddingTop: "15px",
                        background: "#EF4358",
                        paddingLeft: "25px",
                        paddingBottom: "15px",
                        height: "auto",
                        paddingRight: "25px",
                      }}
                    >
                      <img src="https://i.imgur.com/pQOyktA.png"></img>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Layout>
        <Layout style={{ paddingTop: "200px" }}>
          <Row align="middle" justify="center">
            <Col xl={5} xs={14} lg={6}>
              <Typography.Title style={{ textAlign: "center" }}>
                Your eCommerce made simple
              </Typography.Title>
            </Col>
          </Row>
          <Row
            align="middle"
            gutter={30}
            justify="space-between"
            style={{
              paddingTop: "50px",
              paddingLeft: "80px",
              paddingRight: "80px",
            }}
          >
            <Col xs={24} lg={8} style={{ marginBottom: "50px" }}>
              <div style={{ position: "relative" }}>
                <img
                  src="https://i.imgur.com/YQC3up7.png"
                  style={{ borderRadius: "20px", height: "250px" }}
                ></img>
                <div
                  style={{ top: "10px", left: "-20px", position: "absolute" }}
                >
                  <img src="https://i.imgur.com/oISASa3.png"></img>
                </div>
                <div
                  style={{ top: "70px", left: "-30px", position: "absolute" }}
                >
                  <img
                    src="https://i.imgur.com/Um5mCEM.png"
                    style={{ borderRadius: "10px" }}
                  ></img>
                </div>
              </div>
              <Row style={{ paddingTop: "100px" }}>
                <Col>
                  <Typography.Title style={{ color: "#272D4E" }}>
                    All You Need to Start
                  </Typography.Title>
                </Col>
                <Col style={{ paddingTop: "10px" }}>
                  <Typography.Text
                    style={{ color: "#94A2B3", fontSize: "18px" }}
                  >
                    Add WooCommerce plugin to any WordPress site and set up a
                    new store in minutes.
                  </Typography.Text>
                </Col>
                <Col style={{ paddingTop: "20px" }}>
                  <Row align="middle" gutter={5}>
                    <Col>
                      <Typography.Title level={2} style={{ color: "#299EF3" }}>
                        Ecommerce for Wordpress{" "}
                      </Typography.Title>
                    </Col>
                    <Col style={{ marginTop: "-6px" }}>
                      <RightOutlined style={{ color: "#299EF3" }} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col
              lg={8}
              xs={24}
              style={{ marginBottom: "50px", marginTop: "50px" }}
            >
              <Row>
                <Col style={{ position: "relative" }}>
                  <img
                    src="https://i.imgur.com/kgvgHfj.png"
                    style={{ borderRadius: "20px", height: "250px" }}
                  ></img>
                  <div
                    style={{ top: "-30px", left: "40px", position: "absolute" }}
                  >
                    <img
                      src="https://i.imgur.com/Qp1uXBy.png"
                      style={{ borderRadius: "10px", width: "100px" }}
                    ></img>
                  </div>
                  <div
                    style={{ top: "100px", left: "40px", position: "absolute" }}
                  >
                    <img
                      src="https://i.imgur.com/oz4GRb4.png"
                      style={{ borderRadius: "10px", width: "100px" }}
                    ></img>
                  </div>
                  <div
                    style={{ top: "30px", left: "230px", position: "absolute" }}
                  >
                    <img
                      src="https://i.imgur.com/Nr78EWV.png"
                      style={{ borderRadius: "10px", width: "100px" }}
                    ></img>
                  </div>
                  <div
                    style={{
                      top: "140px",
                      left: "180px",
                      position: "absolute",
                    }}
                  >
                    <img
                      src="https://i.imgur.com/5FQxtiu.png"
                      style={{ borderRadius: "10px", width: "100px" }}
                    ></img>
                  </div>
                  <div
                    style={{
                      top: "220px",
                      left: "100px",
                      position: "absolute",
                    }}
                  >
                    <img
                      src="https://i.imgur.com/2T0RwdC.png"
                      style={{ borderRadius: "10px", width: "100px" }}
                    ></img>
                  </div>
                </Col>
              </Row>
              <Row style={{ paddingTop: "90px" }}>
                <Col>
                  <Typography.Title style={{ color: "#272D4E" }}>
                    Customize and Extend
                  </Typography.Title>
                </Col>
                <Col style={{ paddingTop: "10px" }}>
                  <Typography.Text
                    style={{ color: "#94A2B3", fontSize: "18px" }}
                  >
                    From subscriptions to gym classes to luxury cars,
                    WooCommerce is fully customizable.
                  </Typography.Text>
                </Col>
                <Col style={{ paddingTop: "20px" }}>
                  <Row align="middle" gutter={5}>
                    <Col>
                      <Typography.Title level={2} style={{ color: "#299EF3" }}>
                        Browse Extensions
                      </Typography.Title>
                    </Col>
                    <Col style={{ marginTop: "-6px" }}>
                      <RightOutlined style={{ color: "#299EF3" }} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col
              xs={24}
              lg={8}
              style={{
                marginBottom: "50px",
                marginTop: "100px",
                position: "relative",
              }}
            >
              <img
                src="https://i.imgur.com/vKnxQdU.png"
                style={{ borderRadius: "20px", height: "250px" }}
              ></img>
              <div style={{ top: "55px", left: "70px", position: "absolute" }}>
                <img
                  src="https://i.imgur.com/nwUU66U.png"
                  style={{ borderRadius: "10px" }}
                ></img>
              </div>
              <div
                style={{ top: "-25px", left: "250px", position: "absolute" }}
              >
                <img
                  src="https://i.imgur.com/GznFfXg.png"
                  style={{ borderRadius: "10px" }}
                ></img>
              </div>
              <div
                style={{ top: "170px", left: "270px", position: "absolute" }}
              >
                <img
                  src="https://i.imgur.com/qpCInJ2.png"
                  style={{ borderRadius: "10px" }}
                ></img>
              </div>
              <Row style={{ paddingTop: "70px" }}>
                <Col>
                  <Typography.Title style={{ color: "#272D4E" }}>
                    Active Community
                  </Typography.Title>
                </Col>
                <Col style={{ paddingTop: "10px" }}>
                  <Typography.Text
                    style={{ color: "#94A2B3", fontSize: "18px" }}
                  >
                    WooCommerce is one of the fastest-growing eCommerce
                    communities.{" "}
                  </Typography.Text>
                </Col>
                <Col style={{ paddingTop: "20px" }}>
                  <Row align="middle" gutter={5}>
                    <Col>
                      <Typography.Title level={2} style={{ color: "#299EF3" }}>
                        Check our Forums
                      </Typography.Title>
                    </Col>
                    <Col style={{ marginTop: "-6px" }}>
                      <RightOutlined style={{ color: "#299EF3" }} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Layout>
        <Layout style={{ backgroundColor: "#9013fe", marginTop: "120px" }}>
          <Row
            align="middle"
            justify="center"
            style={{ paddingBottom: "30px", marginTop: "-20px" }}
          >
            <Col xs={20} lg={10}>
              <img
                src="https://i.imgur.com/KbqIyOh.png"
                style={{ borderRadius: "20px", height: "540px" }}
              ></img>
            </Col>
            <Col xs={20} lg={10} style={{ paddingRight: "70px" }}>
              <Row>
                <Col>
                  <Typography.Title
                    style={{
                      color: "#ffffff",
                      fontSize: "36px",
                      fontWeight: "bold",
                    }}
                  >
                    Develop Without Limits
                  </Typography.Title>
                </Col>
                <Col>
                  <Typography.Text
                    style={{ color: "#ffffff", fontSize: "18px" }}
                  >
                    WooCommerce is developer friendly, too. Built with a REST
                    API, WooCommerce is scalable and can integrate with
                    virtually any service. Design a complex store from scratch,
                    extend a store for a client, or simply add a single product
                    to a WordPress site—your store, your way.
                  </Typography.Text>
                </Col>
                <Col style={{ paddingTop: "30px" }}>
                  <Button
                    style={{
                      backgroundColor: "#70C217",
                      border: "none",
                      borderRadius: "50px",
                      paddingTop: "15px",
                      color: "#ffffff",
                      paddingLeft: "30px",
                      paddingBottom: "15px",
                      fontSize: "18px",
                      height: "auto",
                      paddingRight: "30px",
                    }}
                  >
                    Read the Documentation
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row align="middle" justify="center" style={{ marginTop: "70px" }}>
            <Col xs={20} lg={10} style={{ paddingLeft: "70px" }}>
              <Row>
                <Col>
                  <Typography.Title
                    style={{
                      color: "#ffffff",
                      fontSize: "36px",
                      fontWeight: "bold",
                    }}
                  >
                    Know our Global Community
                  </Typography.Title>
                </Col>
                <Col>
                  <Typography.Text
                    style={{ color: "#ffffff", fontSize: "18px" }}
                  >
                    WooCommerce is one of the fastest-growing eCommerce
                    communities. We’re proud that the helpfulness of the
                    community and a wealth of online resources are frequently
                    cited as reasons our users love it. There are 80+ meetups
                    worldwide!
                  </Typography.Text>
                </Col>
                <Col style={{ paddingTop: "30px" }}>
                  <Button
                    style={{
                      backgroundColor: "#70C217",
                      border: "none",
                      borderRadius: "50px",
                      paddingTop: "15px",
                      color: "#ffffff",
                      paddingLeft: "30px",
                      paddingBottom: "15px",
                      fontSize: "18px",
                      height: "auto",
                      paddingRight: "30px",
                    }}
                  >
                    Read the Documentation
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={10} xs={20}>
              <img
                src="https://i.imgur.com/S1pmDCD.png"
                style={{
                  borderRadius: "20px",
                  marginTop: "20px",
                  float: "right",
                  marginBottom: "-20px",
                  height: "540px",
                }}
              ></img>
            </Col>
          </Row>
        </Layout>
        <Layout style={{ paddingTop: "100px", paddingBottom: "120px" }}>
          <Row
            align="middle"
            justify="center"
            style={{ paddingBottom: "50px" }}
          >
            <Col>
              <Typography.Title
                style={{
                  width: "550px",
                  fontSize: "55px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Trusted by Agencies &amp; Store Owners
              </Typography.Title>
            </Col>
          </Row>
          <Row align="middle" justify="center">
            <Col
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                paddingTop: "50px",
                paddingLeft: "50px",
                paddingBottom: "150px",
                position: "relative",
                paddingRight: "50px",
              }}
            >
              <img
                src="https://i.imgur.com/aSt8pnx.png"
                style={{
                  height: "168px",
                  paddingLeft: "140px",
                  paddingRight: "140px",
                }}
              ></img>
              <div style={{ top: "120px", position: "absolute" }}>
                <Typography.Title
                  level={4}
                  style={{
                    width: "510px",
                    fontSize: "25px",
                    color: "#94A2B3",
                    textAlign: "center",
                  }}
                >
                  No other eCommerce platform allows people to start for free
                  and grow their store as their business grows. More
                  importantly, WooCommerce doesn&#039;t charge you a portion of
                  your profits as your business grows!
                </Typography.Title>
              </div>
              <Row
                gutter={30}
                style={{ top: "400px", left: "450px", position: "absolute" }}
              >
                <Col>
                  <img src="https://i.imgur.com/GJi1CHH.png"></img>
                </Col>
                <Col>
                  <img src="https://i.imgur.com/jy5De4f.png"></img>
                </Col>
              </Row>
              <div
                style={{ top: "-130px", left: "-200px", position: "absolute" }}
              >
                <img src="https://i.imgur.com/GziAlO7.png"></img>
              </div>
              <div
                style={{ top: "80px", left: "-280px", position: "absolute" }}
              >
                <img src="https://i.imgur.com/NnOuqk9.png"></img>
              </div>
              <div
                style={{ top: "350px", left: "-200px", position: "absolute" }}
              >
                <img src="https://i.imgur.com/54HO3us.png"></img>
              </div>
              <div
                style={{ top: "-150px", left: "650px", position: "absolute" }}
              >
                <img src="https://i.imgur.com/yw9MyRJ.png"></img>
              </div>
              <div style={{ top: "60px", left: "750px", position: "absolute" }}>
                <img src="https://i.imgur.com/CQciXn9.png"></img>
              </div>
              <div
                style={{ top: "380px", left: "700px", position: "absolute" }}
              >
                <img src="https://i.imgur.com/VAWolvS.png"></img>
              </div>
            </Col>
          </Row>
        </Layout>
        <Layout style={{ paddingTop: "50px" }}>
          <Row
            align="middle"
            justify="center"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <Col style={{ width: "900px" }}>
              <Typography.Title
                style={{
                  fontSize: "55px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Supported by real people
              </Typography.Title>
            </Col>
            <Col style={{ width: "900px" }}>
              <Typography.Title
                level={4}
                style={{
                  fontSize: "18px",
                  color: "#94A2B3",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Our team of Happiness Engineers works remotely from 58 countries
                providing customer support across multiple time zones.
              </Typography.Title>
            </Col>
            <Col style={{ width: "900px" }}>
              <img
                src="https://i.imgur.com/wMmjQZZ.png"
                style={{ width: "100%" }}
              ></img>
            </Col>
          </Row>
        </Layout>
        <Layout style={{ backgroundColor: "#5F37EF" }}>
          <Row
            align="middle"
            justify="center"
            style={{
              paddingTop: "30px",
              paddingBottom: "30px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Col style={{ width: "900px", marginBottom: "20px" }}>
              <Typography.Text
                style={{ color: "rgba(255,255,255,0.86)", fontSize: "35px" }}
              >
                WooCommerce - the
              </Typography.Text>
              <Typography.Text style={{ color: "#ffffff", fontSize: "35px" }}>
                {" "}
                most customizable eCommerce platform
              </Typography.Text>
              <Typography.Text
                style={{ color: "rgba(255,255,255,0.86)", fontSize: "35px" }}
              >
                {" "}
                for building
              </Typography.Text>
              <Typography.Text style={{ color: "#ffffff", fontSize: "35px" }}>
                {" "}
                your online business.
              </Typography.Text>
            </Col>
            <Col>
              <Button
                style={{
                  backgroundColor: "#5F37EF",
                  borderRadius: "50px",
                  paddingTop: "15px",
                  color: "#ffffff",
                  paddingLeft: "35px",
                  paddingBottom: "15px",
                  fontSize: "18px",
                  borderWidth: "3px",
                  height: "auto",
                  paddingRight: "35px",
                }}
              >
                GET STARTED
              </Button>
            </Col>
          </Row>
        </Layout>
        <Layout style={{ backgroundColor: "#7854F7" }}>
          <Row
            align="middle"
            gutter={80}
            justify="center"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <Col>
              <Row align="middle" gutter={15} style={{ marginBottom: "50px" }}>
                <Col>
                  <img src="https://i.imgur.com/Df6iih3.png"></img>
                </Col>
                <Col>
                  <Typography.Text
                    style={{ color: "rgba(255,255,255,0.8)", fontSize: "20px" }}
                  >
                    30 day
                  </Typography.Text>
                  <Typography.Text
                    style={{
                      color: "#ffffff",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    money back guarantee
                  </Typography.Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row align="middle" gutter={15} style={{ marginBottom: "50px" }}>
                <Col>
                  <img src="https://i.imgur.com/hgR2OjI.png"></img>
                </Col>
                <Col>
                  <Typography.Text
                    style={{
                      color: "#ffffff",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Support
                  </Typography.Text>
                  <Typography.Text
                    style={{ color: "rgba(255,255,255,0.8)", fontSize: "20px" }}
                  >
                    {" "}
                    teams across the world
                  </Typography.Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row align="middle" gutter={15} style={{ marginBottom: "50px" }}>
                <Col>
                  <img src="https://i.imgur.com/jSQjaqh.png"></img>
                </Col>
                <Col>
                  <Typography.Text
                    style={{
                      color: "#ffffff",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Safe &amp; Secure
                  </Typography.Text>
                  <Typography.Text
                    style={{ color: "rgba(255,255,255,0.8)", fontSize: "20px" }}
                  >
                    {" "}
                    online payment
                  </Typography.Text>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            align="middle"
            justify="center"
            style={{ paddingBottom: "20px" }}
          >
            <Col>
              <img src="https://i.imgur.com/G20JbiY.png"></img>
            </Col>
          </Row>
          <Row align="middle" justify="center">
            <Col style={{ width: "90%" }}>
              <Divider
                type="horizontal"
                orientation="center"
                style={{ backgroundColor: "#9A7DFF" }}
              />
            </Col>
          </Row>
          <Row align="top" gutter={70} justify="center">
            <Col>
              <Row style={{ display: "block", marginBottom: "50px" }}>
                <Col>
                  <Typography.Title
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      textTransform: "uppercase",
                    }}
                  >
                    Who we Are
                  </Typography.Title>
                </Col>
                <Col>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    About
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Team
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Work With Us
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row style={{ display: "block", marginBottom: "50px" }}>
                <Col>
                  <Typography.Title
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      textTransform: "uppercase",
                    }}
                  >
                    Woocommerce
                  </Typography.Title>
                </Col>
                <Col>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Features
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Payments
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Marketing
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Shipping
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Extension Store
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    eCommerce blog
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Development blog
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Ideas board
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Mobile App
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Community
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Style Guide
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Email Newsletter
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row style={{ display: "block", marginBottom: "50px" }}>
                <Col>
                  <Typography.Title
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      textTransform: "uppercase",
                    }}
                  >
                    Other products
                  </Typography.Title>
                </Col>
                <Col>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Storefront
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    WooSlider
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Sensei
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Sensei Extensions
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row style={{ display: "block", marginBottom: "50px" }}>
                <Col>
                  <Typography.Title
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      textTransform: "uppercase",
                    }}
                  >
                    Support
                  </Typography.Title>
                </Col>
                <Col>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Documentation
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Customizations
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Support Policy
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Contact
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    COVID-19 Resources
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Privacy Notice for
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    California Users
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row style={{ display: "block", marginBottom: "50px" }}>
                <Col>
                  <Typography.Title
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      textTransform: "uppercase",
                    }}
                  >
                    We recommend
                  </Typography.Title>
                </Col>
                <Col>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    WooExperts
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Hosting Solutions
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Pre-sales FAQ
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Success Stories
                  </Button>
                </Col>
                <Col style={{ marginTop: "-7px" }}>
                  <Button
                    type="link"
                    size="large"
                    style={{
                      fontSize: "14px",
                      padding: "0px",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Design Feedback Group
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Layout>
        <Layout>
          <Row
            align="middle"
            justify="space-around"
            style={{ paddingTop: "15px", paddingBottom: "15px" }}
          >
            <Col>
              <Row style={{ marginBottom: "10px" }}>
                <Col>
                  <Button type="link">
                    <TwitterOutlined
                      style={{ color: "#272D4E", fontSize: "30px" }}
                    />
                  </Button>
                </Col>
                <Col>
                  <Button type="link">
                    <FacebookFilled
                      style={{ color: "#272D4E", fontSize: "30px" }}
                    />
                  </Button>
                </Col>
                <Col>
                  <Button type="link">
                    <WifiOutlined
                      style={{
                        color: "#272D4E",
                        fontSize: "30px",
                        transform: "rotate(45deg)",
                      }}
                    />
                  </Button>
                </Col>
                <Col>
                  <Button type="link">
                    <InstagramFilled
                      style={{ color: "#272D4E", fontSize: "30px" }}
                    />
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <div style={{ marginBottom: "10px" }}>
                <Typography.Text style={{ color: "#272D4E", fontSize: "14px" }}>
                  COPYRIGHT WOOCOMMERCE 2020 -{" "}
                </Typography.Text>
                <Typography.Text
                  style={{
                    color: "#272D4E",
                    fontSize: "14px",
                    textDecoration: "underline",
                  }}
                >
                  {" "}
                  TERMS &amp; CONDITIONS PRIVACY POLICY
                </Typography.Text>
              </div>
            </Col>
            <Col>
              <div style={{ marginBottom: "10px" }}>
                <img src="https://i.imgur.com/xodNe0k.png"></img>
              </div>
            </Col>
          </Row>
        </Layout>
      </Layout>
    </div>
  );
}
export default WooCommerceAntUI;