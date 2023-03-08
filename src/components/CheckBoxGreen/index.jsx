export default function CheckBoxGreen({ ...props }) {
  return (
    <input
      type="checkbox"
      {...props}
      className={` relative float-left h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border border-solid border-[rgba(0,0,0,0.25)]
                 bg-white outline-none  checked:bg-textGreen  before:pointer-events-none
                  before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full 
                  before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] 
                   checked:border-primary checked:bg-primary checked:before:opacity-[0.16] 
                   checked:after:ml-[0.4rem] checked:after:mt-[0.1rem] checked:after:block checked:after:h-[0.65rem] 
                  checked:after:w-[0.3rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 
                  checked:after:border-l-0 checked:after:border-solid  
                  checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                  focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12]  
                  focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] 
                  focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary
                   checked:focus:before:scale-100  checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                   checked:focus:after:ml-[0.4rem] checked:focus:after:mt-[0.1rem] checked:focus:after:h-[0.65rem] checked:focus:after:w-[0.3rem] checked:focus:after:rotate-45 
                   checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 
                   checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent  `}
    />
  );
}
