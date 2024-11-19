import datetime 
import pyodide 

@pyodide.export 
def export_time():
    time = datetime.datetime.now()
    time_str = str(time)
    simplify_time= time_str[:19]
    return (simplify_time)

