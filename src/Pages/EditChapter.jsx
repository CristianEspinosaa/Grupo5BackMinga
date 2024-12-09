import img1 from '../assets/image4.png';

const EditChapter = () => {
    return (
        <div className="flex items-center justify-center h-screen w-">
            <div className="flex flex-col lg:flex-row-reverse lg:items-center justify-center lg:justify-around rounded-2xl bg-white p-6 lg:p-8 w-2/3 max-w-4xl">
                <div className="hidden lg:flex flex-col items-center p-6 rounded-lg w-full lg:w-full">
                    <h2 className="text-lg font-light mb-4">Chapter #1 - Discover the word</h2>
                    <img
                        src={img1}
                        alt="User Profile"
                        className=""
                    />
                </div>
                <div className="flex flex-col items-center p-6 rounded-lg w-2/3 lg:w-3/4">
                    <h2 className="text-2xl font-semibold mb-24 text-center">Edit Chapter</h2>
                    <form className="flex flex-col items-center w-full">
                        <input
                            type="text"
                            name="nameOfManga"
                            className="w-full mb-4 border-b-2 border-gray-200 focus:outline-none focus:border-green-500"
                            placeholder="Name of the manga"
                            required
                        />
                        <input
                            type="text"
                            name="selectChapter"
                            className="w-full mb-4 border-b-2 border-gray-200 focus:outline-none focus:border-green-500"
                            placeholder="Select chapter"
                            required
                        />
                        <input
                            type="text"
                            name="selectData"
                            className="w-full mb-4 border-b-2 border-gray-200 focus:outline-none focus:border-green-500"
                            placeholder="Select data"
                            required
                        />
                        <input
                            type="text"
                            name="dataToEdit"
                            className="w-full mb-4 border-b-2 border-gray-200 focus:outline-none focus:border-green-500"
                            placeholder="Data to edit"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full h-16 p-2 mt-6 mb-4 font-semibold text-white text-2xl bg-[#34D399] rounded-full hover:bg-[#4de0aa]"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="w-full h-16 mt-4 p-2 text-[#EE8380] font-semibold text-2xl bg-[#FBDDDC] rounded-full hover:bg-[#ed7a76] hover:text-white"
                        >
                            Delete
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default EditChapter;
