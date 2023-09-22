import { FC } from "react";

const Empty: FC = () => {
  return (
    <div>
      <div className="frame">
        <div className="word">
          <div className="ee">
            <div className="light left"></div>
            <div className="light top"></div>
            <div className="light middle"></div>
            <div className="light bottom"></div>
          </div>
          <div className="nn">
            <div className="light left"></div>
            <div className="light middle"></div>
            <div className="light right"></div>
          </div>
          <div className="dd">
            <div className="light left"></div>
            <div className="right">
              <div className="circleBox">
                <div className="circle"></div>
              </div>
              <div className="topDotBox">
                <div className="light dot"></div>
              </div>
              <div className="bottomDotBox">
                <div className="light dot"></div>
              </div>
            </div>
            <svg
              width="120px"
              height="120px"
              viewBox="0 0 120 120"
              className="rightSVG"
            >
              <defs>
                <filter id="glow" x="0" y="0" width="200%" height="200%">
                  <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
                  <feGaussianBlur
                    result="blurOut"
                    in="offOut"
                    stdDeviation="10"
                  />
                  <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
              </defs>
              <circle cx="60" cy="60" r="56" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empty;
//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "id",
//       key: "id",
//       width: 100,
//     },
//     {
//       title: "Image",
//       dataIndex: "thumbnailUrl",
//       key: "thumbnailUrl",
//       width: 100,
//       render: (thumbnailUrl: string) => (
//         <img src={thumbnailUrl} alt="Thumbnail" style={{ width: "50px" }} />
//       ),
//     },
//     {
//       title: "Title",
//       dataIndex: "title",
//       key: "title",
//       width: 150,
//       render: (text: string) => (
//         <Tooltip title={text}>
//           <div>{text.slice(0, 15)}</div>
//         </Tooltip>
//       ),
//     },
//     {
//       title: "Cross Number",
//       dataIndex: "crossNumber",
//       key: "crossNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },

//     {
//       title: "Ashgabat",
//       key: "operation",
//       fixed: "right",
//       width: 100,
//       render: () => <a>action</a>,
//     },
//     {
//       title: "Moscov",
//       key: "operation",
//       fixed: "right",
//       width: 100,
//       render: () => <a>action</a>,
//     },
//   ];
