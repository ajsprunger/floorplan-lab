import Bedroom from "./Bedroom"
import Bath from "./Bath"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

function FloorPlan () {
  return (
    <>
      <div><Bedroom bednum='1'/></div>
      <div><Kitchen /></div>
      <div><Bath size='Half'/></div>
      <div><Bedroom bednum='2'/></div>
      <div><LivingRoom /></div>
      <div><Bath size='Full'/></div>
      <div><Bedroom bednum='3'/></div>
    </>
  )
}

export default FloorPlan