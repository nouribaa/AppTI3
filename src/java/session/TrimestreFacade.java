/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package session;

import beans.Trimestre;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author NOUREDDINE
 */
@Stateless
public class TrimestreFacade extends AbstractFacade<Trimestre> {
    @PersistenceContext(unitName = "AppTI3PU")
    private EntityManager em;
    
    
    @Override
    protected EntityManager getEntityManager() {
        em.flush();
em.clear();
em.getEntityManagerFactory().getCache().evictAll();
        return em;
    }

    
    
    public TrimestreFacade() {
        super(Trimestre.class);
    }
    
}
