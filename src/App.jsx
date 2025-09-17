@@ .. @@
 import React from "react";
 import Banner from "./components/Banner.jsx";
 import TokenDisplay from "./components/TokenDisplay.jsx";
 import MintButton from "./components/MintButton.jsx";
+import RunwayGallery from "./components/RunwayGallery.jsx";

 function App() {
   return (
     <div className="app">
       <Banner />
       <TokenDisplay />
       <MintButton />
+      <RunwayGallery />
     </div>
   );
 }

 export default App;