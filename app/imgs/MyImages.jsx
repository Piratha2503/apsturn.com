import React from 'react';
import Java from "./MyIcons/java-ar21.svg";
import JavaScript from "./MyIcons/javascript-ar21.svg";
import Dart from "./MyIcons/dartlang-official.svg";
import Flutter from "./MyIcons/flutterio-ar21.svg";
import ReactJs from "./MyIcons/reactjs-ar21 (1).svg";
import Redux from "./MyIcons/js_redux-ar21.svg";
import Tailwind from "./MyIcons/tailwindcss-ar21.svg";
import Spring_boot from "./MyIcons/springio-ar21.svg";
import mysql from "./MyIcons/mysql-official.svg";
import Postgresql from "./MyIcons/postgresql-vertical.svg";
import MariaDb from "./MyIcons/mariadb-ar21.svg";
import Oracle from "./MyIcons/oracle-ar21.svg";
import MongoDb from "./MyIcons/mongodb-ar21.svg";
import Appachie from "./MyIcons/apache-ar21.svg"; 
import Tomcat from "./MyIcons/apache_tomcat-ar21.svg";
import Linux from "./MyIcons/linux-ar21.svg";
import Jenkins from "./MyIcons/jenkins-official.svg";
import Docker from "./MyIcons/docker-ar21.svg";
import Kubernates from "./MyIcons/kubernetes-ar21.svg";
import GoogleClouds from "./MyIcons/google_cloud-ar21.svg";

export const myTechSVGList = [
    Java,JavaScript,Dart,Flutter,ReactJs,Redux,Tailwind,Spring_boot,
    mysql,Postgresql,MariaDb,Oracle,MongoDb,Jenkins,Docker,Kubernates,
    GoogleClouds,Tomcat,Linux,Appachie
]

const MyImages = () => {
    
    return (
        <div>
            {myTechSVGList.map((image,index) => (
               <span key={index}>
               {image}
               </span>

            ))}
        </div>
    );
};

export default MyImages;