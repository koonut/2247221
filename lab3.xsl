<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
    <head>
      <title>pet shop</title>
      <link rel="stylesheet" type="text/css" href="lab3-1.css"></link>
    </head>
  <body>
    <center>
      <div id="wrapper">
    <h2>Store</h2>
        <table border="1" class="rtable">
      <tr bgcolor="#9acd32">
        <th>pet name</th>
        <th>breed</th>
        <th>price</th>
        <th>availability</th>
      </tr>
      <xsl:for-each select="pet_store/pet">
      <xsl:sort select="age"/>
      <tr>
        <td><xsl:value-of select="name"/></td>
        <td><xsl:value-of select="breed"/></td>
        <td><xsl:value-of select="price"/></td>
        <td><xsl:value-of select="availability"/></td>
      </tr>
      </xsl:for-each>
    </table>
    </div>
    </center>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>