import React from 'react';
import Navbar from '../Navbar/Navbar';
import ResumeAwards from '../ResumeAwards/ResumeAwards';
import ResumeEducation from '../ResumeEducation/ResumeEducation';
import ResumeProjects from '../ResumeProjects/ResumeProjects';
import './Resume.css'

const Resume = () => {
    return (
      <>
      <Navbar></Navbar>
        <div className="d-flex text-center">
            <div className="nav flex-column nav-pills sidebar" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">About Me</a>
  <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Education</a>
  <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Projects</a>
  <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Awards</a>
</div>
<div className="tab-content ml-5 content" id="v-pills-tabContent">
  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      <h1>Hello , I am Faraz Samin</h1>
      <h4>Web Developer</h4>
      <h1>About me</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus maxime itaque architecto, provident nobis quos, tenetur quis enim molestiae velit, perferendis dolorum natus reiciendis rem pariatur eligendi non possimus tempore? Commodi, nam voluptates impedit, itaque velit asperiores aperiam delectus quos pariatur exercitationem natus ipsam amet perferendis laudantium hic facilis, eum magni dolorem quasi accusantium odio. Perspiciatis amet, mollitia ratione sequi quam cupiditate porro exercitationem accusamus sed aliquid aliquam nam consectetur, repudiandae dolores ipsa ab? Iste eum, optio, neque voluptatibus dolor quaerat nesciunt aspernatur maxime, corporis dignissimos earum ad aperiam vero impedit perspiciatis rem deserunt consequuntur nisi quos libero. Veniam praesentium facere numquam. Modi, nihil ad? Incidunt dicta modi quidem tempore, error possimus quas, quam sit ipsam, libero cumque perferendis maxime accusantium quae sed sint! Harum quidem ipsa beatae sunt minus magni consequatur quos nam. Magni tempora illo modi architecto voluptas odio quam eligendi corporis unde, ullam aut necessitatibus ab culpa, veniam nisi qui, quo nemo reiciendis ipsa consectetur sapiente iusto. Laborum nulla, facilis dolore fugit doloribus aut dolorum reiciendis, tempore quod perferendis suscipit necessitatibus? Modi nobis ex cumque porro!</p>
      <h1>Personal Portfolio</h1>
      <div className="row">
          <div className="col-md-6">
                <p>Name : </p>
                <p>Email : </p>
          </div>
          <div className="col-md-6">
               <p>Faraz Samin</p>
               <p>saminfaraz40@gmail.com</p>

          </div>
      </div>
  </div>
  <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      <ResumeEducation institute="International Islamic University Chittagong" degree="BSc in CSE" session="January,2017- January -2021"></ResumeEducation>
      <ResumeEducation institute="Chittagong College" degree="HSC" session="January, 2014- January 2016"></ResumeEducation>
      <ResumeEducation institute="Chittagong Collegiate School" degree="SSC" session="2014"></ResumeEducation>
  </div>
  <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
    <div className="row">
      <ResumeProjects projectTitle="Online Classroom" projectDescription="Online class" projectLink="https://www.facebook.com"></ResumeProjects>
      <ResumeProjects projectTitle="Online Classroom" projectDescription="Online class" projectLink="https://www.facebook.com"></ResumeProjects>
      <ResumeProjects projectTitle="Online Classroom" projectDescription="Online class" projectLink="https://www.facebook.com"></ResumeProjects>
      <ResumeProjects projectTitle="Online Classroom" projectDescription="Online class" projectLink="https://www.facebook.com"></ResumeProjects>
      <ResumeProjects projectTitle="Online Classroom" projectDescription="Online class" projectLink="https://www.facebook.com"></ResumeProjects>
      <ResumeProjects projectTitle="Online Classroom" projectDescription="Online class" projectLink="https://www.facebook.com"></ResumeProjects>
      <ResumeProjects projectTitle="Online Classroom" projectDescription="Online class" projectLink="https://www.facebook.com"></ResumeProjects>
      <ResumeProjects projectTitle="Online Classroom" projectDescription="Online class" projectLink="https://www.facebook.com"></ResumeProjects>
    </div>
  </div>
  <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
    <h1>Awards</h1>
    <ResumeAwards></ResumeAwards>
    <ResumeAwards></ResumeAwards>
    <ResumeAwards></ResumeAwards>
    <ResumeAwards></ResumeAwards>
    <ResumeAwards></ResumeAwards>
    <ResumeAwards></ResumeAwards>
    <ResumeAwards></ResumeAwards>
    <h1>Certification</h1>
    <a href='f'><ResumeAwards></ResumeAwards></a>
    <a href='f'><ResumeAwards></ResumeAwards></a>
    <a href='f'><ResumeAwards></ResumeAwards></a>
    <a href='f'><ResumeAwards></ResumeAwards></a>
    <a href='f'><ResumeAwards></ResumeAwards></a>
    <a href='f'><ResumeAwards></ResumeAwards></a>
    <a href='f'><ResumeAwards></ResumeAwards></a>
  
  </div>
</div>
        </div>
        </>
    );
};

export default Resume;