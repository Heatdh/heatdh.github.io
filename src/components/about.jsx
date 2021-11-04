import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Cpp",
          content: "C++",
          porcentage: "85%",
          value: "85"
        },
        { id: "C", content: "C", porcentage: "90%", value: "90" },
        { id: "Perl", content: "Perl", porcentage: "80%", value: "80" },
        {
          id: "QT",
          content: "QT",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "VHDL",
          content: "VHDL",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "Java",
          content: "Java",
          porcentage: "70%",
          value: "70"
        },
        
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        }//,
        //{ id: "Machine", content: "Machine Learning", porcentage: "95%", value: "95" },
        //{ id: "NETWork", content: "Network penetration testing", porcentage: "75%", value: "75" },

      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am an IT Engineering Student and Software developer at Infineon. In 2021, I got my bachelor degree in Electrical Engineering and Information Technology from the Technical University of Munich and Currently pursuing a Master degree in Robotics,Cognition, Intelligence."
        },
        {
          id: "second-p-about",
          content:
            "During the course of my studies I had the chance to develop different IT skills and to put them in test through internships and Tutoring position within my faculty. This allowed me to expand my programming skills and to shape and develop clean coding style and helped me be on track towards my future carreer."
        },
        {
          id: "third-p-about",
          content:
            "I am  intersted in Machine Learning and Artificial Intelligence, which made me choose to specialize in this field and orient my studies as well as my bachelor thesis in this field."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      { <p className="title-s">Programming Knowledge</p> }
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
