import { TSlot } from '../Slot/slot.interface'

const createSlots = (payload: TSlot) => {
  const { service, startTime, date, endTime } = payload

  const startTimeMinutes = Number(startTime.split(':')[0]) * 60
  const endTimeMinutes = Number(endTime.split(':')[0]) * 60

  const totalDuration = endTimeMinutes - startTimeMinutes

  const numberOfSlots: (number | undefined)[] = new Array(
    totalDuration / 60,
  ).fill(1)

  const getHours = Number(startTime.split(':')[0])

  const newSlots = numberOfSlots.map((slot, index: number) => {
    return {
      service,
      date,
      startTime:
        getHours + index < 10
          ? `0${getHours + index}:00`
          : `${getHours + index}:00`,
      endTime: `${getHours + index + 1}:00`,
    }
  })
  return newSlots
}

export default createSlots

// // Function to convert time in "HH:MM" format to the number of minutes since midnight
// function timeToMinutes(time: string): number {
//     // Example input: "09:00"
//     const [hours, minutes] = time.split(":").map(Number); // Split time string and convert to numbers
//     // Example after splitting: hours = 9, minutes = 0
//     return hours * 60 + minutes; // Convert hours to minutes and add the minutes
//     // Example return value: 540
// }

// // Function to convert the number of minutes since midnight back to "HH:MM" format
// function minutesToTime(minutes: number): string {
//     // Example input: 540
//     const hours = Math.floor(minutes / 60).toString().padStart(2, '0'); // Calculate hours and ensure two digits
//     // Example hours: "09"
//     const mins = (minutes % 60).toString().padStart(2, '0'); // Calculate minutes and ensure two digits
//     // Example mins: "00"
//     return `${hours}:${mins}`; // Return formatted time string
//     // Example return value: "09:00"
// }

// // Define the start and end times as strings
// const startTime = "09:00"; // Start time
// const endTime = "14:00"; // End time
// const serviceDuration = 60; // Duration of each slot in minutes

// // Convert the start and end times to minutes since midnight
// const startMinutes = timeToMinutes(startTime); // Example result: 540
// const endMinutes = timeToMinutes(endTime); // Example result: 840

// // Calculate the total duration between start and end times in minutes
// const totalDuration = endMinutes - startMinutes; // Example result: 840 - 540 = 300

// // Calculate the number of slots by dividing the total duration by the service duration
// const numberOfSlots = totalDuration / serviceDuration; // Example result: 300 / 60 = 5

// // Initialize an array to store the slot time intervals
// const slots = [];

// // Loop through the number of slots to generate each slot's start and end times
// for (let i = 0; i < numberOfSlots; i++) {
//     // Calculate the start time of the current slot in minutes since midnight
//     const slotStartMinutes = startMinutes + i * serviceDuration;
//     // Example when i = 0: 540 + 0 * 60 = 540
//     // Example when i = 1: 540 + 1 * 60 = 600
//     // Example when i = 2: 540 + 2 * 60 = 660
//     // Example when i = 3: 540 + 3 * 60 = 720
//     // Example when i = 4: 540 + 4 * 60 = 780

//     // Calculate the end time of the current slot in minutes since midnight
//     const slotEndMinutes = slotStartMinutes + serviceDuration;
//     // Example when i = 0: 540 + 60 = 600
//     // Example when i = 1: 600 + 60 = 660
//     // Example when i = 2: 660 + 60 = 720
//     // Example when i = 3: 720 + 60 = 780
//     // Example when i = 4: 780 + 60 = 840

//     // Add the current slot's start and end times to the slots array
//     slots.push({
//         startTime: minutesToTime(slotStartMinutes), // Convert minutes to "HH:MM" format
//         endTime: minutesToTime(slotEndMinutes) // Convert minutes to "HH:MM" format
//     });
//     // Example when i = 0: { startTime: "09:00", endTime: "10:00" }
//     // Example when i = 1: { startTime: "10:00", endTime: "11:00" }
//     // Example when i = 2: { startTime: "11:00", endTime: "12:00" }
//     // Example when i = 3: { startTime: "12:00", endTime: "13:00" }
//     // Example when i = 4: { startTime: "13:00", endTime: "14:00" }
// }

// // Log the slots array to the console
// console.log(slots);
// // Expected output:
// // [
// //     { startTime: "09:00", endTime: "10:00" },
// //     { startTime: "10:00", endTime: "11:00" },
// //     { startTime: "11:00", endTime: "12:00" },
// //     { startTime: "12:00", endTime: "13:00" },
// //     { startTime: "13:00", endTime: "14:00" }
// // ]
