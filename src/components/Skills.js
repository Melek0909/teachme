import React from 'react';
import '../css/Skills.css'

function StudentSkills(){
    return(
        <div style={{display:"flex", flexDirection: "row"}} >
            <div className='col-6 Learningpart' style={{ justifyContent:"space-around"}}>
                <div>
                    <h1 className='icanteach'>
                        I can teach
                    </h1>
                </div>
                <div style={{margin:"80px"}}>
                    <label class="container part1">HTML
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>

                    <label class="container part1">CSS
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>

                    <label class="container part1">JavaScrpt
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>
                    
                    <label class="container part1">React
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>

                    <label class="container part1">Git/Github
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>

            <div className='col-6 Teachingpart'>
                <div>
                    <h1 className='icanlearn'>
                        I want to learn
                    </h1>
                </div>
                <div style={{margin:"80px"}}>
                <label class="container part2">HTML
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>

                    <label class="container part2">CSS
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>

                    <label class="container part2">JavaScrpt
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>
                    
                    <label class="container part2">React
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>

                    <label class="container part2">Git/Github
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default StudentSkills;