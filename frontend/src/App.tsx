import React from "react";
import Typography from "./Typography";

const App: React.FC = () => {
  return (
    <div className="p-8">
      {/* Using H1 */}
      <Typography variant="h1" className="text-blue-500">
        This is a responsive H1
      </Typography>

      {/* Using H2 */}
      <Typography variant="h2" className="text-green-500">
        This is a responsive H2
      </Typography>

      {/* Using H3 */}
      <Typography variant="h3" className="text-red-500">
        This is a responsive H3
      </Typography>

      {/* Using P */}
      <Typography variant="p" className="text-gray-700">
        This is a responsive paragraph.
      </Typography>

      {/* Using Small */}
      <Typography variant="small" className="text-gray-500">
        This is responsive small text.
      </Typography>
    </div>
  );
};

export default App;
