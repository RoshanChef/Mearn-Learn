import { workExp } from '../utils/data';
function Page3() {
    return (
        <div className="h-screen text-[#081d13] ">
            <div className='text-center text-6xl font-semibold '>My Work Experience</div>
            <div className='flex flex-col gap-12'>
                {workExp.map((ele) => {
                    return (
                        <div className="flex justify-between  px-[6rem] relative top-[6rem] ">
                            <div className='w-1/2'>
                                <p className='text-2xl font-semibold'>{ele.place}</p>
                                <p className='font-medium text-[#081d138f]'>{ele.tenure}</p>
                            </div>
                            <div className='w-1/2'>
                                <p className='text-2xl font-semibold'>{ele.role}</p>
                                <p className='font-medium'>{ele.detail}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className=""></div>
        </div>
    )
}

export default Page3
