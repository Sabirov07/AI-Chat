import { FC } from 'react'

const ChatHeader: FC = () => {
  return (
    <div className='w-full flex gap-3 justify-start items-center text-zinc-800'>
      <div className='flex flex-row items-center text-sm'>
        {/* <p className='text-sm p-2'>Chat with</p> */}
        {/* <div className='flex gap-2.5 items-center p-2'> */}{/* </div> */}
          {/* <p className='w-2 h-2 rounded-full bg-green-500' /> */}
          <img src="alex_head.jpeg" alt="Chat Icon" className="w-8 h-8 rounded-full mr-2" />
          <p className='font-medium'>Chat with $100M GPT</p>
      </div>
    </div>
  )
}

export default ChatHeader
