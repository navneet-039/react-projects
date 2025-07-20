import React, { useState } from "react";

export default function Accordian() {
  const qaData = [
    {
      question: "What is a computer network?",
      answer:
        "A computer network is a group of interconnected devices that can share data and resources with each other.",
    },
    {
      question: "What is the difference between a host and a node?",
      answer:
        "A node is any device on a network, while a host is a node that can send or receive data over the network.",
    },
    {
      question: "What is TCP/IP?",
      answer:
        "TCP/IP is a set of communication protocols used to interconnect network devices on the internet.",
    },
    {
      question: "What is the difference between an IP address and a MAC address?",
      answer:
        "An IP address is a logical address used to identify devices on a network, while a MAC address is a physical address assigned to a device's network interface.",
    },
    {
      question: "What is the purpose of DNS?",
      answer:
        "DNS (Domain Name System) translates domain names (like google.com) into IP addresses so browsers can load websites.",
    },
    {
      question: "What is HTTP?",
      answer:
        "HTTP (HyperText Transfer Protocol) is a protocol used to transfer data over the web, especially for loading web pages.",
    },
    {
      question: "What is a router?",
      answer:
        "A router is a device that forwards data packets between computer networks, routing traffic from one network to another.",
    },
    {
      question: "What is a firewall?",
      answer:
        "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined rules.",
    },
  ];

  const [singleDisplay, setSingleDisplay] = useState(null);
  const [multipleDisplay, setMultipleDisplay] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleDisplay = (index) => {
    setSingleDisplay(index === singleDisplay ? null : index);
  };

  const handleMultipleDisplay = (index) => {
    let cpymultiple = [...multiple];
    const findindex = cpymultiple.indexOf(index);
    if (findindex === -1) cpymultiple.push(index);
    else cpymultiple.splice(findindex, 1);
    setMultiple(cpymultiple);
  };

  return (
    <div className="mx-auto flex justify-center mt-[120px]">
      <div className="flex flex-col justify-center mx-auto">
        <button
          className="bg-richblack-700 mb-[50px] w-[200px] p-4 h-[50px] font-inter rounded-md ml-[300px] text-richblack-5 hover:scale-95 transition-all duration-200 border-b-1 border-richblack-600"
          onClick={() => setMultipleDisplay(!multipleDisplay)}
        >
          Enable Multiple Display
        </button>

        {qaData.map((data, index) => (
          <div
            key={index}
            className="flex justify-between flex-col border-b border-gray-300 gap-2 mb-4 text-md bg-richblack-700 text-richblack-50 w-[800px] m-3 p-5"
          > 
            <div
              className="flex justify-between items-center h-12 cursor-pointer  "
              onClick={() =>
                multipleDisplay
                  ? handleMultipleDisplay(index)
                  : handleDisplay(index)
              }
            >
              <p className="font-medium">{data.question}</p>
              <p className="text-xl text-gray-500">+</p>
            </div>

            {multipleDisplay
              ? multiple.includes(index) && <div>{data.answer}</div>
              : singleDisplay === index && <div>{data.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
