
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex w-[100%]'>
      
        <div className='w-full'>
            <div className='flex mt-10 container m-auto gap-6'>
                <div><h1 className='text-3xl'>APPOINTMENT</h1></div>
                <div><h1 className='text-3xl'>Patient Registration</h1></div>
                <div><h1>EMERGENCY</h1></div>
                <div><h1>PROCEDURE ROOM</h1></div>
            </div>
        </div>
    </div>
  );
}
