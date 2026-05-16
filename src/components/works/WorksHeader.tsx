import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WorksHeader = () => {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          className="-mx-2 inline-flex min-h-11 items-center px-2 text-primary transition-colors hover:text-primary-dark"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default WorksHeader;
