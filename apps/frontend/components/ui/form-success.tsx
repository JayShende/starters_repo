import { MdFileDownloadDone } from "react-icons/md";

interface FormSuccessProps{
  message?:string;
}

const FormSuccess = ({
  message
}:FormSuccessProps) => {
  if(!message) return null;
  
  return (
    <div className="w-full bg-emerald-300 p-4 rounded-md flex gap-x-4 items-center text-emerald-950">
      <MdFileDownloadDone />
      <div>
      {message}
      </div>
    </div>
  )
};

export default FormSuccess;
