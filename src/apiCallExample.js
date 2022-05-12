// line chart
// async getLineChartData(
//     fromDate: DateTime,
//     toDate: DateTime,
//     currentgroup: number,
//     currentUser: number | undefined
//   ): Promise<GetLineChartData> {
//     const user = localStorage.getItem("user");
//     const userobj = user !== null && JSON.parse(user);
//     let response = undefined;
//     if (currentgroup === 0 && currentUser === undefined) {
//       response = await axios.get(
//         `https://flyworex.azurewebsites.net/api/ItTrend/GetItTrend?from=${fromDate.toISODate()}&to=${toDate.toISODate()}`,
//         { headers: { Authorization: `Bearer ${userobj.token}` } }
//       );
//     } else if (currentUser === undefined && currentgroup !== 0) {
//       response = await axios.get(
//         `https://flyworex.azurewebsites.net/api/ItTrend/GetItTrend?from=${fromDate.toISODate()}&to=${toDate.toISODate()}&groupId=${currentgroup}`,
//         { headers: { Authorization: `Bearer ${userobj.token}` } }
//       );
//     } else if (currentUser !== undefined && currentgroup === 0) {
//       response = await axios.get(
//         `https://flyworex.azurewebsites.net/api/ItTrend/GetItTrend?from=${fromDate.toISODate()}&to=${toDate.toISODate()}&computerId=${currentUser}`,
//         { headers: { Authorization: `Bearer ${userobj.token}` } }
//       );
//     } else {
//       response = await axios.get(
//         `https://flyworex.azurewebsites.net/api/ItTrend/GetItTrend?from=${fromDate.toISODate()}&to=${toDate.toISODate()}&groupId=${currentgroup}&computerId=${currentUser}`,
//         { headers: { Authorization: `Bearer ${userobj.token}` } }
//       );
//     }

//     return response.data;
//   }
