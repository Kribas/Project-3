import { HelpOutline } from "@mui/icons-material";
import React from "react";
import { Accordion } from 'react-bootstrap';
import "./FAQ.css";

export default function FAQ(props) {
  return (
    <div className="faq">
      <div className="container">
        <div className="faq__title text-center">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>

        <div className="faq__body">
          <Accordion>
            <Accordion.Item className="my-3 accordion__item" eventKey="0">
              <Accordion.Header className="accordion__header"><HelpOutline className="mx-2 header__icon"/><h6>Non consectetur a erat nam at lectus urna duis?</h6></Accordion.Header>
              <Accordion.Body>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="my-3 accordion__item" eventKey="1">
              <Accordion.Header className="accordion__header">
              <HelpOutline className="mx-2 header__icon"/><h6>Feugiat scelerisque varius morbi enim nunc?</h6> 
                </Accordion.Header>
              <Accordion.Body>
              Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="my-3 accordion__item" eventKey="2">
              <Accordion.Header className="accordion__header">
              <HelpOutline className="mx-2 header__icon"/> <h6>Dolor sit amet consectetur adipiscing elit?</h6>
                </Accordion.Header>
              <Accordion.Body>
              Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="my-3 accordion__item" eventKey="3">
              <Accordion.Header className="accordion__header">
              <HelpOutline className="mx-2 header__icon"/> <h6>Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat?</h6>
                </Accordion.Header>
              <Accordion.Body>
              Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="my-3 accordion__item" eventKey="4">
              <Accordion.Header className="accordion__header">
              <HelpOutline className="mx-2 header__icon"/> <h6>Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                  turpis nunc eget lorem dolor?</h6>
                </Accordion.Header>
              <Accordion.Body>
              Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
