import asyncio

restly = {}
mySheetId = "testing"


"""
@restly Request access to the Restly beta
@method POST
@path /requestAccess
"""
async def requestAccess(email: str):
    await restly.googlesheet.addRow(sheetId=mySheetId, value={'email': email})

    await restly.slack.message(channel='#waitlist',
                               message=f'{email} joined waitlist')









asyncio.run(requestAccess("test"))
