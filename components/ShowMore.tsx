'use client'

import { useRouter } from "next/navigation"
import { showMoreProps } from "../types"
import { CustomButton } from "."
import { updateSearchParams } from "../utils"

const ShowMore = ({pageNumber, isNext}: showMoreProps) => {
  const router = useRouter()

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10
    const newPathName = updateSearchParams('limit', `${newLimit}`)

    router.push(newPathName, {scroll: false})
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton 
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white hover:bg-blue-700 hover:font-semibold focus:bg-blue-800 font-medium "
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore