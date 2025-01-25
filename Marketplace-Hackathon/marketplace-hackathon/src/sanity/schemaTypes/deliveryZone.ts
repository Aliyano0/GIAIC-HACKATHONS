// export default {
//   name: "deliveryZone",
//   title: "Delivery Zone",
//   type: "document",
//   fields: [
//     {
//       name: "coverageArea",
//       title: "Coverage Area",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           fields: [
//             {
//               name: "cities",
//               title: "Cities",
//               type: "array",
//               of: [
//                 {
//                   type: "object",
//                   fields: [
//                     {
//                       name: "cityName",
//                       title: "City Name",
//                       type: "string"
//                     },
//                     {
//                       name: "areaCode",
//                       title: "Area Code",
//                       type: "string"
//                     },
//                     {
//                       name: "deliveryCharges",
//                       title: "Delivery Charges",
//                       type: "string"
//                     }
//                   ]
//                 }
//               ]
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "assignedDrivers",
//       title: "Assigned Drivers",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           fields: [
//             {
//               name: "driverName",
//               title: "Driver Name",
//               type: "string",
//             },
//             {
//               name: "driverContact",
//               title: "Driver Contact",
//               type: "string"
//             },
//           ],
//         },
//       ],
//     }
//   ]
// }