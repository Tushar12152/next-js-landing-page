import Nav from "@/Components/Nav";

const layout = ({children}) => {
    return (
        <div className='w-[95%] mx-auto'>
            <Nav/>
             {children}
        </div>
    );
};

export default layout;