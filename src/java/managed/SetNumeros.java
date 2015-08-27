/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package managed;

import beans.OrdreMission;
import beans.Personnel;
import beans.Trimestre;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author NOUREDDINE
 */
@WebServlet(name = "SetNumeros", urlPatterns = {"/SetNumeros"})
public class SetNumeros extends HttpServlet {
     @EJB
    private session.OrdreMissionFacade ejbFacade;
    private OrdreMission current;
    
    @EJB
    private session.TrimestreFacade ejbTrim;
    private Trimestre trim;

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
       
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        System.out.println("Servlet SetNumeros was opened");
        int idTrim = Integer.parseInt(request.getParameter("idTrim"));
        int num = Integer.parseInt(request.getParameter("num"));
        
        List<Integer> ids = new ArrayList<Integer>();
        List<OrdreMission> ordres = new ArrayList<OrdreMission>();
        trim = ejbTrim.find(idTrim);
        ordres = (List<OrdreMission>) trim.getOrdreMissionCollection();
        for(OrdreMission index:ordres){
            current = ejbFacade.find(index.getIdOrdre());
            current.setNum(""+num);
            ejbFacade.edit(current);
            num = num+1;
        }
        
        
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
