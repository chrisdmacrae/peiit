import { writeFileSync } from "fs";
import { resolve } from "path";

async function getForm(id, name) {
  try {
    console.log(`Fetching ${name}...`)
    const action = `https://script.google.com/macros/s/AKfycbw-yJvopjNhUiug4A5vkXg930pTA2R9z2yaURsvLTQkBcy-D2AvPtWY2o7yRETVzl8g/exec?formId=${id}`
    const response = await fetch(action)
    const form = await response.json()
    const path = resolve(process.cwd(), "./src/data/forms", `./${name}.json`)

    form.action = action

    console.log(`Writing ${name} to ${path}...`)
    writeFileSync(path, JSON.stringify(form, null, 2), { encoding: 'utf-8' })
    console.log(`Wrote ${name}`)
  }
  catch (error) {
    console.error("Failed to fetch form", error)
  }
}

getForm("1dVzUETMU-MtTkXk--CKtQtczDgWIRphpnTbCfXMwLLM", "join")