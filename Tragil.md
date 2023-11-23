# temp
## The Timer Bug Example 

run in https://react.dev/learn/installation#try-react
explain the behavior, and fix it

import { useState, useEffect } from 'react';

function createTimer() {
    return{
        secondsPassed: 0,
        increase() {
            this.secondsPassed += 1
        },
        reset() {
            this.secondsPassed = 0
        }
    }
}
function Greeting({ name }) {
   const [timer, setValue] = useState(createTimer());

   useEffect(() => {
    const intervalId = setInterval(() => {
      timer.increase(); 
    }, 1000);
    return () => clearInterval(intervalId);
  });
  
  return <button onClick={() => 
   timer.reset()}>Seconds passed:
   {timer.secondsPassed}</button>;

}


export default function App() {
  
  return <Greeting name="world" />
}


solution:

aW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JzsKCmZ1bmN0aW9uIGNyZWF0ZVRpbWVyKCkgewogICAgcmV0dXJuewogICAgICAgIHNlY29uZHNQYXNzZWQ6IDAsCiAgICAgICAgaW5jcmVhc2UoKSB7CiAgICAgICAgICAgIHRoaXMuc2Vjb25kc1Bhc3NlZCArPSAxCiAgICAgICAgfSwKICAgICAgICByZXNldCgpIHsKICAgICAgICAgICAgdGhpcy5zZWNvbmRzUGFzc2VkID0gMAogICAgICAgIH0KICAgIH0KfQpmdW5jdGlvbiBHcmVldGluZyh7IG5hbWUgfSkgewogICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKGNyZWF0ZVRpbWVyKCkpOwoKICAgdXNlRWZmZWN0KCgpID0+IHsKICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7CglzZXRUaW1lcih7Li4udGltZXIsIHNlY29uZHNQYXNzZWQ6IHRpbWVyLnNlY29uZHNQYXNzZWQrMSB9KTsKICAgICAKICAgIH0sIDEwMDApOwogICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7CiAgfSk7CiAgCiAgcmV0dXJuIDxidXR0b24gb25DbGljaz17KCkgPT4gCiAgIHRpbWVyLnJlc2V0KCl9PlNlY29uZHMgcGFzc2VkOgogICB7dGltZXIuc2Vjb25kc1Bhc3NlZH08L2J1dHRvbj47Cgp9CgoKZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkgewogIAogIHJldHVybiA8R3JlZXRpbmcgbmFtZT0id29ybGQiIC8+Cn0K

inspired from https://mobx.js.org/react-integration.html

## cascading drop-down list

there are 3 available options to select

![image](https://github.com/RivkaAltshuler/temp/assets/32875275/cefe44de-5d2d-4a5a-ae8d-6a378b0e51bd)

in each selection, there are options to select in the second control


select first option:


![image](https://github.com/RivkaAltshuler/temp/assets/32875275/41732ed6-9796-46db-a4ff-683723951fad)

select second option:



![image](https://github.com/RivkaAltshuler/temp/assets/32875275/133f6841-3877-4fcc-8206-be9dd6c37b1a)

select 3th option:



![image](https://github.com/RivkaAltshuler/temp/assets/32875275/9c23d8e4-17af-4299-9d13-8fbba9c1089f)
