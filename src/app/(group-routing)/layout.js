import Nav from "@/Components/Nav";

const layout = ({children}) => {
    return (
        <div className='w-[100%] mx-auto'>
            <Nav/>
             {children}
        </div>
    );
};

export default layout;