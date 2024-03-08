import DocumentTitle from "../components/DocumentTitle";

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className="container">
        <h1>Welcome to phonebook!</h1>
      </div>
    </>
  );
}
//===========
// const styles = {
//   container: {
//     minHeight: "calc(100vh - 50px)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "lightblue",
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: "center",
//   },
// };
// return (
//     <>
//       <DocumentTitle>Home</DocumentTitle>

//       <div style={styles.container}>
//         <h1 style={styles.title}>Welcome to phonebook!</h1>
//       </div>
//     </>
