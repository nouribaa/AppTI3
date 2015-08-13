/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package session;

import beans.OrdreMission;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author NOUREDDINE
 */
@Stateless
public class OrdreMissionFacade extends AbstractFacade<OrdreMission> {
    @PersistenceContext(unitName = "AppTI3PU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
public void Create(OrdreMission o){
        em.persist(o);
    }
public List<OrdreMission> FindByTrima(int idTrim){
        Query qr=em.createNamedQuery("OrdreMission.findByTrima");
        qr.setParameter("trim", idTrim);
        return qr.getResultList();
    }
    public OrdreMissionFacade() {
        super(OrdreMission.class);
    }
    
}
