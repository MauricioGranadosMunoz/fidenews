<?php
class Database {
    
    // CREAMOS LA CONN CON LA BASE DE DATOS

    // private $db_host = '20.51.249.9';
    // private $db_name = 'santos-hoy';
    // private $db_username = 'santoshoy';
    // private $db_password = 'mauriciogrm123456Mg';
    private $db_username = 'root';
    private $db_password = '';
    
   
    // Create connection to Oracle
   

    public function dbConnection(){
        
        $db = "(DESCRIPTION=(ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.100.165)(PORT = 1521)))(CONNECT_DATA=(SID=orcl)))" ;
        $conn = oci_connect($db_username, $db_password, $db);
        if (!$conn) {
           $m = oci_error();
           echo $m['message'], "\n";
           exit;
        }
        else {
           print "Connected to Oracle!";
        }
        // Close the Oracle connection
        oci_close($conn);
          
    }
    public function endPointResponseMsg($success, $status, $message){
        return array_merge([
            'success' => $success,
            'status' => $status,
            'message' => $message
        ]);
    }
}