import { render,screen } from "@testing-library/react"
import { Greeting } from "./Greeting"
import userEvent from "@testing-library/user-event"


//test suit name
describe('Greeting Component',()=>{
    test('renders Hello world as a text',()=>{
        //Arrange
        render(<Greeting />)
    
        //Act-...nothing
    
        //Assert
        const helloWorldElement=screen.getByText('Hello World',{exact:false})
       expect(helloWorldElement).toBeInTheDocument()
    })
    test('renders good to see you if button was not clicked',()=>{
        render(<Greeting />)
        const outputElement=screen.getByText('good to see you',{exact:false})
        expect(outputElement).toBeInTheDocument()
    
    })

    test('renders Changed if button was clicked',()=>{
        //Arrange
        render(<Greeting />)

        //Act
        const buttonElement=screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert
        const outputElement=screen.getByText('Changed',{exact:false})
        expect(outputElement).toBeInTheDocument()

    })

})







